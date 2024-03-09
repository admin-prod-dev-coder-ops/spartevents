import { Grid } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSidebar from "./EventDetailedSidebar";
import { useAppSelector } from "../../../app/store/store";
import { useParams } from "react-router-dom";


export default function EventDetailedPage() {
  const {id} = useParams();
  const event = useAppSelector(state => state.events.events.find(e=> e.id === id))

  if(!event) return<h2>Event was not found!</h2>

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader events={event}/>
        <EventDetailedInfo events={event}/>
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar />
      </Grid.Column>
    </Grid>
  )
}