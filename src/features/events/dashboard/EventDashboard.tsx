import { Grid, GridColumn } from "semantic-ui-react";
import EvenList from "../EvenList";
import { useAppSelector } from "../../../app/store/store";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/nav/LoadingComponent";
import { actions } from "../eventSlice";
import { useFirestore } from "../../../app/hooks/firestore/useFirestore";

export default function EventDashboard() {
  const { data: events, status } = useAppSelector(state => state.events);
  const { loadCollection } = useFirestore('events');
  useEffect(() => {
    loadCollection(actions)
  }, [loadCollection])
  if (status == 'loading') return <LoadingComponent />
  return (
    <Grid>
      <GridColumn width={10}>
        <EvenList events={events} />
      </GridColumn>
      <GridColumn width={6}>
        <h2>Filters</h2>
      </GridColumn>
    </Grid>
  )
}