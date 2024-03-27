import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppUser } from "../../app/model/User"
import { User } from "firebase/auth"

type State = {
    authenticated: boolean
    currentUser: AppUser | null
}

const initialState: State = {
    authenticated: false,
    currentUser: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signIn:{
            reducer: (state, action: PayloadAction<AppUser>) => {
                state.authenticated = true;
                state.currentUser = action.payload
            },
            prepare: (user: User) => {
                const mapped: AppUser = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    providerId: user.providerData[0].providerId,
                    photoURl: user.photoURL
                }
                return {payload: mapped}
            }
        } ,
        logout: (state) =>{
            state.authenticated = false;
            state.currentUser = null
    }
}
})

export const {signIn, logout} = authSlice.actions