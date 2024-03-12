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
                const mapped = events.map((e: any)=>{
                    const newDateVal = Timestamp.fromDate(new Date(e.date))
                    return {...e, date:newDateVal.toDate().toDateString()
                    //concat(" ").concat(newDateVal.toDate().get)
                }
                });
                return {payload: mapped}
            }
        } ,        
        createEvent: (state,action)=>{
            state.events.push(action.payload);
        },
        updateEvent: (state,action)=>{
            state.events[state.events.
                findIndex(evt=>evt.id===action.payload.id)]=
                action.payload
        },
        deleteEvent: (state,action)=>{
            state.events.splice(
            state.events.findIndex(
                evt=>evt.id===action.payload.id),1)
        }
    }
})

export const {createEvent, updateEvent, deleteEvent, setEvents} 
    = eventSlice.actions