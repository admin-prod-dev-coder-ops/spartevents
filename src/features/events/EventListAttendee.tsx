import { ItemGroup, Segment, SegmentGroup, Item, ItemContent, ItemHeader, 
  ItemDescription} from "semantic-ui-react";
export default function EventListAttendee() {
  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
          <i class="chess bishop icon"></i>
            <ItemContent>
              <ItemHeader>Event Attendee Name</ItemHeader>
              <ItemDescription>Ella</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </Segment>
      </SegmentGroup>
  )
}