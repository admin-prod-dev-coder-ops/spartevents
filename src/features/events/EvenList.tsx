import EventListItem from "./EventListItem";
import { Events } from "../../app/model/Events";

type eventListProps = {
  events: Events []
}
export default function EvenList(props: eventListProps) {
  return (
    <>
    {props.events.map((ev: Events)=>(
      <EventListItem key={ev.id} events={ev}/>
    ))}

    </>
  )
}