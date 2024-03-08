import { ItemGroup, Segment, SegmentGroup, Item, ItemContent, ItemHeader, 
  ItemDescription, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Events } from "../../app/model/Events";                                                                                                                                                                                                                     
import { Attendee } from "../../app/model/Attendee";
import { Link } from "react-router-dom";


type eventListItemProp ={
  events: Events
}

export default function EventListItem({events} : eventListItemProp) {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <i/>🥑
            <ItemContent>
              <ItemHeader>{events.title}</ItemHeader>
              <ItemDescription>{events.description}</ItemDescription>
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
          {events.attendees.map((attendee: Attendee)=>(
                <EventListAttendee key={attendee.id} attendees={attendee}/>
          ))}

        </List>
      </Segment>
      <Segment clearing>
        <span>{events.description}</span>
        <Button 
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