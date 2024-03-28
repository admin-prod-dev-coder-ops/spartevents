import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { useAppSelector } from "../../../app/store/store";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { categoryOptions } from "./categoryOptions";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { AppEvent } from "../../../app/model/Events";
import { Timestamp, arrayUnion } from "firebase/firestore";
import { toast } from "react-toastify";
import { useFirestore } from "../../../app/hooks/firestore/useFirestore";
import { useEffect } from "react";
import { actions } from "../eventSlice";
import LoadingComponent from "../../../app/layout/nav/LoadingComponent";


export default function EventForm() {
    const { loadDocument, create, update } = useFirestore('events');
    const {currentUser} = useAppSelector(state=>state.auth);
    const { register, handleSubmit, control, setValue, formState: { errors, isValid, isSubmitting } } = useForm({
        mode: 'onTouched',
        defaultValues: async () => {
            if (event)
                return { ...event, date: new Date(event.date) }
        }
    })
    const { id } = useParams();
    const event = useAppSelector(state => state.events.data.find(e => e.id === id));
    const navigate = useNavigate();
    const { status } = useAppSelector(state => state.events);
    useEffect(() => {
        if (!id) return;
        loadDocument(id, actions)
    }, [id, loadDocument])

    async function updateEvent(data: AppEvent) {
        if (!event) return;
        await update(data.id, {
            ...data,
            date: Timestamp.fromDate(data.date as unknown as Date)
        })
    }

    async function createEvent(data: FieldValues) {
        if(!currentUser) return;
        const ref = await create({
            ...data,
            hostUid: currentUser.uid,
            hostedBy: currentUser.displayName,
            hostPhotoURL: currentUser.photoURl,
            attendees: arrayUnion({
                id: currentUser.uid,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURl
            }),
            attendeeIds: arrayUnion(currentUser.uid),
            date: Timestamp.fromDate(data.date as unknown as Date)
        })
        return ref
    }

    async function handleCancelToggle(event: AppEvent) {
        await update(event.id, {
            isCancelled: !event.isCancelled
        });
        toast.success(`Event has been ${event.isCancelled ? 'uncancelled' : 'cancelled'}`)
    }

    async function onSubmit(data: FieldValues) {
        try {
            if (event) {
                await updateEvent({ ...event, ...data });
                navigate(`/events/${event.id}`);
            } else {
                const ref = await createEvent(data);
                navigate(`/events/${ref?.id}`)
            }

        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
    }
    if (status == 'loading') return <LoadingComponent />
    return (
        <Segment clearing>
            <Header content='Event details' sub color='teal' />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Input
                    placeholder="Event title"
                    defaultValue={event?.title || ''}
                    {...register('title', { required: true })}
                    error={errors.title && 'Title is required'} />
                <Controller
                    name='category'
                    control={control}
                    rules={{ required: 'Category is required' }}
                    render={({ field }) => (
                        <Form.Select
                            options={categoryOptions}
                            placeholder="Event Category"
                            {...field}
                            onChange={(_, d) => setValue('category',
                                d.value, { shouldValidate: true })}
                            error={errors.category && 'Category is required'} />
                    )} />

                <Form.TextArea
                    placeholder="Event Description"
                    defaultValue={event?.description || ''}
                    {...register('description', { required: true })}
                    error={errors.description && 'Description is required'} />
                <Header content='Location details' color='teal' />
                <Form.Input
                    placeholder="City"
                    defaultValue={event?.city || ''}
                    {...register('city', { required: true })}
                    error={errors.city && 'City is required'} />
                <Form.Input
                    placeholder="Venue"
                    defaultValue={event?.venue || ''}
                    {...register('venue', { required: true })}
                    error={errors.venue && 'Venue is required'} />
                <Form.Field>
                    <Controller
                        name='date'
                        control={control}
                        rules={{ required: 'Date is required' }}
                        defaultValue={event && new Date(event.date) || null}
                        render={({ field }) => (
                            <DatePicker
                                selected={field.value}
                                onChange={(value: any) => setValue('date', value, { shouldValidate: true })}
                                showTimeSelect
                                timeCaption='time'
                                dateFormat='MMM d, yyyy h:mm aa'
                            />)}
                    />
                </Form.Field>

               {event && (
                <Button 
                    type="button"
                    floated="left"
                    color={event.isCancelled ? 'green' : 'red'}
                    onClick={() => handleCancelToggle(event)}
                    content={event.isCancelled ? 'Reactivate event' : 'cancel'}
                    />
               )}                 

                <Button
                    loading={isSubmitting}
                    disabled={!isValid}
                    type="submit" floated="right"
                    positive content="Submit" />

                <Button disabled={isSubmitting}
                    as={Link} to='/events' type="button"
                    floated="right" content="Cancel" />
            </Form>
        </Segment>
    )
}