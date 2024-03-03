import { ItemGroup, Segment, SegmentGroup, Item, ItemContent, ItemHeader, 
  ItemDescription, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Events } from "../../app/model/Events";                                                                                                                                                                                                                     
import { Attendee } from "../../app/model/Attendee";


type eventListItemProp ={
  events: Events
}

export default function EventListItem(props : eventListItemProp) {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <i/>🥑
            <ItemContent>
              <ItemHeader>{props.events.title}</ItemHeader>
              <ItemDescription>{props.events.description}</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' />{props.events.date}
          <Icon name='marker' />{props.events.venue}
          </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {props.events.attendees.map((attendee: Attendee)=>(
                <EventListAttendee key={attendee.id} attendees={attendee}/>
          ))}

        </List>
      </Segment>
      <Segment clearing>
        <span>Description of the Event</span>
        <Button color='teal' floated='right' content='View' />
      </Segment>
    </SegmentGroup>
  )
} 