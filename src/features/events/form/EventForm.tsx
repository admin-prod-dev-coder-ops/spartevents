import { ChangeEvent, useState } from "react";
import { Button, Form, Header,Segment } from "semantic-ui-react";
import { Events } from "../../../app/model/Events";
import { createId } from "@paralleldrive/cuid2";
type Props = {
    setFormOpen: (value: boolean) => void;
    addEvent: (event: Events)=> void
    selectedEvent: Events | null
}
export default function EventForm({setFormOpen,addEvent,selectedEvent}: Props) {
    const initValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    }

    const [values, setValues] = useState(initValues)

    function onSubmit() {
        addEvent({...values, id: createId(), hostedBy:'bob', attendees:[]})
        setFormOpen(false)
    }

    function handleInputChanges(e: ChangeEvent<HTMLInputElement>){
        const {name,value} = e.target;
        setValues({
            ...values,[name]:value
        })
    }
    return (
        <Segment clearing>
            <Header content='Create Event' />
            <Form onSubmit={onSubmit}>
                <Form.Field>
                    <input 
                    type="text" 
                    placeholder="Event title" 
                    value={values.title} 
                    name = 'title'
                    onChange={e => handleInputChanges(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Category" 
                    value={values.category} 
                    name = 'category'
                    onChange={e => handleInputChanges(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Description" 
                    value={values.description} 
                    name = 'description'
                    onChange={e => handleInputChanges(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="City" 
                    value={values.city} 
                    name = 'city'
                    onChange={e => handleInputChanges(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="text" placeholder="Venue" 
                    value={values.venue} 
                    name = 'venue'
                    onChange={e => handleInputChanges(e)}/>
                </Form.Field>
                <Form.Field>
                    <input type="date" placeholder="Date" 
                    value={values.date} 
                    name = 'date'
                    onChange={e => handleInputChanges(e)}/>
                </Form.Field>
            <Button type="submit" floated="right" positive content="Submit" />
            <Button type="button" floated="right" content="Cancel" onClick={()=>setFormOpen(false)}/>
            </Form>
        </Segment>
    )
}