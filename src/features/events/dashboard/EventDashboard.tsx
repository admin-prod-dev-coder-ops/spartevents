import { Grid, GridColumn } from "semantic-ui-react";
import EvenList from "../EvenList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../app/api/SampleData";

export default function EventDashboard() {
  return (
    <Grid>
      <GridColumn width={10}>
       <EvenList events={sampleData}/> 
      </GridColumn>
      <GridColumn width={6}>
       <EventForm />
      </GridColumn>
    </Grid>
  )
}