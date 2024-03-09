import { Grid, GridColumn } from "semantic-ui-react";
import EvenList from "../EvenList";
import { useAppSelector } from "../../../app/store/store";

export default function EventDashboard() {
  const events = useAppSelector(state => state.events.events)
  return (
    <Grid>
      <GridColumn width={10}>
       <EvenList events={events}/> 
      </GridColumn>
      <GridColumn width={6}>
        <h2>Filters</h2>
      </GridColumn>
    </Grid>
  )
}