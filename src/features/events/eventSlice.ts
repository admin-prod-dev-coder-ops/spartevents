import { PayloadAction } from "@reduxjs/toolkit"
import { AppEvent } from "../../app/model/Events"
import { Timestamp } from "firebase/firestore"
import { GenericActions, GenericState, createGenericSlice } from "../../app/store/genericSlice"
import { auth } from "../../app/config/firebase"


type State = {
    data: AppEvent[]
}

const initialState: State = {
    data: []
}

export const eventSlice = createGenericSlice({
    name: 'events',
    initialState: initialState as GenericState<AppEvent[]>,
    reducers: {
        success: {
            reducer: (state, action: PayloadAction<AppEvent[]>) => {
                state.data = action.payload;
                state.status = 'finished'
            },
            prepare: (events: any) => {
                let eventArr: AppEvent[] = [];
                Array.isArray(events) ? eventArr = events : eventArr.push(events);

                const mapped = eventArr.map((e: any) => {
                    return {
                        ...e,
                        date: (e.date as Timestamp) ? ((e.date as Timestamp).toDate()).toISOString() : "",
                        isHost: auth.currentUser?.uid,
                    //    isGoing: e.attendeeeIds.includes(auth.currentUser?.uid)
                    }
                });
                return { payload: mapped }
            }
        }
    }
})

export const actions = eventSlice.actions as GenericActions<AppEvent[]>