import EventListItem from "./EventListItem";
import { AppEvent } from "../../app/model/Events";

type eventListProps = {
  events: AppEvent []
}
export default function EvenList({events}: eventListProps) {
  return (
    <>
    {events.map((ev: AppEvent)=>(
      <EventListItem key={ev.id} events={ev} />
    ))}

    </>
  )
}