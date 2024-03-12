import { Grid, GridColumn } from "semantic-ui-react";
import EvenList from "../EvenList";
import { useAppDispatch, useAppSelector } from "../../../app/store/store";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../app/config/firebase";
import { Events } from "../../../app/model/Events";
import { setEvents } from "../eventSlice";
import LoadingComponent from "../../../app/layout/nav/LoadingComponent";

export default function EventDashboard() {
  const events = useAppSelector(state => state.events.events);
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);
  useEffect (() => {
    const q = query(collection(db, "events"));
    const unsubscribe = onSnapshot(q, {
      next: querySnapshot => {
        const evts: Events[] = []
      querySnapshot.forEach((doc) => {
          evts.push({id: doc.id, ...doc.data()} as Events);
      });
      dispatch(setEvents(evts));
      setLoading(false);
    },
    error: err => {
      console.log(err);
      setLoading(false);    
    },
    complete: () => console.log('Should not be seeing this')
    });
    return () => unsubscribe()
  },[dispatch])
  if(loading) return <LoadingComponent />
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