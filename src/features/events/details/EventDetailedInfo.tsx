import { Button, Grid, Icon, Segment } from "semantic-ui-react";
import { AppEvent } from "../../../app/model/Events";
type Props = {
  events: AppEvent
}
export default function EventDetailedInfo({events}:Props) {
  return (
    <Segment.Group>
      <Segment attached="top" >
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{events.description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached="top" >
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="calendar" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{events.date}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
              <Icon name="marker" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={11}>
              <span>{events.venue}</span>
          </Grid.Column>
          <Grid.Column width={4}>
              <Button size="tiny" color="teal" content="Show Map"/>
          </Grid.Column>
        </Grid>
      </Segment>
    </Segment.Group>
  )
}