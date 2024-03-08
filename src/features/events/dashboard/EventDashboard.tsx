import { Grid, GridColumn } from "semantic-ui-react";
import EvenList from "../EvenList";
import { sampleData } from "../../../app/api/SampleData";
import { useEffect, useState } from "react";
import { Events } from "../../../app/model/Events";

export default function EventDashboard() {
  const [events, setEvents] = useState<Events[]>([])

  useEffect(()=>{
    setEvents(sampleData);
  },[])

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