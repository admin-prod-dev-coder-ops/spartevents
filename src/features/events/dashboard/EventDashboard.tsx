import { Grid, GridColumn } from "semantic-ui-react";
import EvenList from "../EvenList";

export default function EventDashboard() {
  return (
    <Grid>
      <GridColumn width={10}>
       <EvenList /> 
      </GridColumn>
      <GridColumn width={6}>
       <h2>Right Column</h2> 
      </GridColumn>
    </Grid>
  )
}