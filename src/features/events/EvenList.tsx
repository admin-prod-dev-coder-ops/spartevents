import EventListItem from "./EventListItem";
import { Events } from "../../app/model/Events";

type eventListProps = {
  events: Events []
}
export default function EvenList({events}: eventListProps) {
  return (
    <>
    {events.map((ev: Events)=>(
      <EventListItem key={ev.id} events={ev} />
    ))}

    </>
  )
}