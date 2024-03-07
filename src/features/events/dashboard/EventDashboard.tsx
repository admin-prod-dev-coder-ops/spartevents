import { Grid, GridColumn } from "semantic-ui-react";
import EvenList from "../EvenList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../app/api/SampleData";
import { useEffect, useState } from "react";
import { Events } from "../../../app/model/Events";

type Props = {
  formOpen: boolean
  setFormOpen: (value: boolean) => void
  selectEvent: (event: Events | null) => void
  selectedEvent: Events | null
}
export default function EventDashboard({formOpen, setFormOpen,selectEvent, selectedEvent}: Props) {
  const [events, setEvents] = useState<Events[]>([])

  useEffect(()=>{
    setEvents(sampleData);
  },[])

  function addEvent(event: Events){
    setEvents(prevState =>{
      return [...prevState,event]
    })
  }
  function updateEvent(updatedEvent: Events){
    setEvents(events.map(evt => 
      evt.id === updatedEvent.id ? 
      updatedEvent : evt))
      selectEvent(null)
      setFormOpen(false)
  }
  function deleteEvent(eventId: string){
    setEvents(events.filter(evt =>  evt.id !== eventId))
    setFormOpen(false)
  }  

  return (
    <Grid>
      <GridColumn width={10}>
       <EvenList events={events} 
       selectEvent={selectEvent}
       deleteEvent={deleteEvent}/> 
      </GridColumn>
      <GridColumn width={6}>
        {formOpen &&
       <EventForm 
       setFormOpen={setFormOpen} 
       updateEvent={updateEvent}
       addEvent={addEvent} 
       selectedEvent={selectedEvent} 
       key={selectedEvent ? selectedEvent.id : 'create'}/> }
      </GridColumn>
    </Grid>
  )
}