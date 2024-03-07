import EventListItem from "./EventListItem";
import { Events } from "../../app/model/Events";

type eventListProps = {
  events: Events []
  selectEvent: (event: Events) => void
  deleteEvent: (eventId: string) => void
}
export default function EvenList({events, selectEvent,deleteEvent}: eventListProps) {
  return (
    <>
    {events.map((ev: Events)=>(
      <EventListItem key={ev.id} events={ev} 
      selectEvent={selectEvent}
      deleteEvent={deleteEvent}/>
    ))}

    </>
  )
}