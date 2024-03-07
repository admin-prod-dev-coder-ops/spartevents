import { ItemGroup, Segment, SegmentGroup, Item, ItemContent, ItemHeader, 
  ItemDescription, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Events } from "../../app/model/Events";                                                                                                                                                                                                                     
import { Attendee } from "../../app/model/Attendee";


type eventListItemProp ={
  events: Events
  selectEvent: (event: Events) => void
}

export default function EventListItem({events, selectEvent} : eventListItemProp) {
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
        color='teal' 
        floated='right' 
        content='View' 
        onClick={()=>selectEvent(events)}/>
      </Segment>
    </SegmentGroup>
  )
} 