import { PayloadAction } from "@reduxjs/toolkit"
import { Events } from "../../app/model/Events"
import { Timestamp } from "firebase/firestore"
import { GenericActions, GenericState, createGenericSlice } from "../../app/store/genericSlice"


type State = {
    data: Events[]
}

const initialState: State = {
    data: []
}

export const eventSlice = createGenericSlice({
    name: 'events',
    initialState: initialState as GenericState<Events[]>,
    reducers: {
        success: {
            reducer:(state,action: PayloadAction<Events[]>)=>{
                state.data = action.payload;
                state.status = 'finished'
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

export const actions = eventSlice.actions as GenericActions<Events[]>