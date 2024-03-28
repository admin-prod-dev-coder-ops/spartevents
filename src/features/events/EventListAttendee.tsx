import { ItemGroup, Segment, SegmentGroup, Item, ItemContent, ItemHeader, 
  ItemDescription} from "semantic-ui-react";
import { Attendee } from "../../app/model/Events";

  type AttendeeProp ={
    attendees: Attendee
  }

export default function EventListAttendee(props: AttendeeProp) {
  return (
              <SegmentGroup>
              <Segment>
                <ItemGroup>
                  <Item>
                  <i className="chess bishop icon"></i>
                    <ItemContent>
                    <ItemHeader>Event Attendee Name</ItemHeader>
                    <ItemDescription>{props.attendees.name}</ItemDescription>
                    </ItemContent>
                  </Item>
                </ItemGroup>
              </Segment>
              </SegmentGroup>
  )
}