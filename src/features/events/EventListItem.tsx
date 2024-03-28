import { ItemGroup, Segment, SegmentGroup, Item, ItemContent, ItemHeader, 
  ItemDescription, Icon, List, Button, Label } from "semantic-ui-react";
//import EventListAttendee from "./EventListAttendee";
import { AppEvent } from "../../app/model/Events";
//import { Attendee } from "../../app/model/Attendee";
import { Link } from "react-router-dom";
import { useFirestore } from "../../app/hooks/firestore/useFirestore";

type eventListItemProp ={
  events: AppEvent
}
export default function EventListItem({events} : eventListItemProp) {
  const {remove} = useFirestore('events');

  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <i/>🥑
            <ItemContent>
              <ItemHeader>{events.title}</ItemHeader>
              <ItemDescription>{events.description}</ItemDescription>
              {events.isCancelled && (
                <Label
                style={"top:'-40px"}
                ribbon='right'
                color="red"
                content='This event has been cancelled'
                />
              )}

            </ItemContent>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' />{events.date}
          <Icon name='marker' />{events.venue}
          </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          
          {/* {events.attendees.map((attendee: Attendee)=>(
                <EventListAttendee key={attendee.id} attendees={attendee}/>
          ))} */}

        </List>
      </Segment>
      <Segment clearing>
        <span>{events.description}</span>
        <Button 
        onClick={() => remove(events.id)}
        color='red' 
        floated='right' 
        content='Delete' />        
        <Button 
        as={Link}
        to ={`/events/${events.id}`}
        color='teal' 
        floated='right' 
        content='View' />
      </Segment>
    </SegmentGroup>
  )
} 