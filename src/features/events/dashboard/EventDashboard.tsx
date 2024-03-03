import { Grid, GridColumn } from "semantic-ui-react";
import EvenList from "../EvenList";
import EventForm from "../form/EventForm";
import { sampleData } from "../../../app/api/SampleData";

type Props = {
  formOpen: boolean
  setFormOpen: (value: boolean) => void
}

export default function EventDashboard({formOpen, setFormOpen}: Props) {
  return (
    <Grid>
      <GridColumn width={10}>
       <EvenList events={sampleData}/> 
      </GridColumn>
      <GridColumn width={6}>
        {formOpen &&
       <EventForm setFormOpen={setFormOpen}/> }
      </GridColumn>
    </Grid>
  )
}