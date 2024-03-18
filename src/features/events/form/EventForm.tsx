import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form, Header,Segment } from "semantic-ui-react";
import { useAppSelector } from "../../../app/store/store";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { categoryOptions } from "./categoryOptions";
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { Events } from "../../../app/model/Events";
import { Timestamp, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../app/config/firebase";
import { toast } from "react-toastify";

export default function EventForm() {
    const {register, handleSubmit,control,setValue, formState:{errors,isValid, isSubmitting}}= useForm({
        mode: 'onTouched'
    })
    const {id} = useParams();
    const event = useAppSelector(state => state.events.events.find(e=> e.id === id));
    const navigate = useNavigate();

    async function updateEvent(data: Events) {
        if(!event) return;
        console.log("In update Event");
        const docRef = doc(db,'events', event.id);
        const dateVal = Timestamp.fromDate(new Date(data.date))
        await updateDoc(docRef,{
            ...data,
            date: dateVal
        })
    }

    async function createEvent(data: FieldValues) {
        const newEventRef = doc(collection(db,'events'));
        const dateVal = Timestamp.fromDate(new Date(data.date))
        console.log("In update Event");
        await setDoc(newEventRef, {
            ...data,
            hostedBy: 'bob',
            attendees:[],
            hostPhotoURL: '',
            date: dateVal
        })
        return newEventRef
    }

   async function onSubmit(data: FieldValues) {
        try {
            if(event){
                await updateEvent({...event,...data});
                navigate(`/events/${event.id}`);
            }else{
                const ref = await createEvent(data);
                navigate(`/events/${ref.id}`)
            }
                
        } catch (error: any) {
            toast.error(error.message);
            console.log(error.message)
        }
    }

    return (
        <Segment clearing>
            <Header content='Event details' sub color='teal' />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Input
                    placeholder="Event title" 
                    defaultValue={event?.title || ''} 
                    {...register('title',{required: true})} 
                    error={errors.title && 'Title is required'}/>
                <Controller 
                    name='category'
                    control={control} 
                    rules={{required: 'Category is required'}}
                    render={({field}) => (
                    <Form.Select
                    options={categoryOptions}
                    placeholder="Event Category"         
                    {...field}
                    onChange={(_,d)=> setValue('category',
                    d.value,{shouldValidate:true})} 
                    error={errors.category && 'Category is required'}/>     
                    )}/>
                
                <Form.TextArea
                    placeholder="Event Description" 
                    defaultValue={event?.description || ''} 
                    {...register('description',{required: true})} 
                    error={errors.description && 'Description is required'}/>
                <Header content='Location details' color='teal'/>
                <Form.Input
                    placeholder="City" 
                    defaultValue={event?.city || ''} 
                    {...register('city',{required: true})} 
                    error={errors.city && 'City is required'}/>
                <Form.Input
                    placeholder="Venue" 
                    defaultValue={event?.venue || ''} 
                    {...register('venue',{required: true})} 
                    error={errors.venue && 'Venue is required'}/>
                <Form.Field>                
                <Controller
                    name='date'
                    control={control}
                    rules={{required: 'Date is required'}}
                    defaultValue={event && new Date(event.date) || null}
                    render={({field})=>(
                        <DatePicker 
                            selected={field.value}
                            onChange={(value: any)=>setValue('date',value,{shouldValidate: true})}
                            showTimeSelect
                            timeCaption='time'
                            dateFormat='MMM d, yyyy h:mm aa'
                            placeholder="Event Date and time"
                        />)}
                    />
                </Form.Field>
                                                                                                 
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