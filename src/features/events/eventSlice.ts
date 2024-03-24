import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Events } from "../../app/model/Events"
import { Timestamp } from "firebase/firestore"


type State = {
    events: Events[]
}

const initialState: State = {
    events: []
}

export const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        setEvents: {
            reducer:(state,action: PayloadAction<Events[]>)=>{
                state.events = action.payload;
            },
            prepare: (events: any) => {
                let eventArr: Events[] = [];
                Array.isArray(events) ? eventArr =events : eventArr.push(events);

                const mapped = eventArr.map((e: any)=>{
                    return {...e, date:(e.date as Timestamp) ? ((e.date as Timestamp).toDate()).toISOString()
                        : "05-04-2024T06:53:57.553Z"}
                });
                return {payload: mapped}
            }
        } 
    }
})

export const {setEvents} = eventSlice.actions