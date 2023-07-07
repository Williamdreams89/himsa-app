import {createSlice} from "@reduxjs/toolkit"


const AuthSlice = createSlice({
    name: "auth",
    initialState: {user: null, token: null},
    reducers: {
        setCredentials: (state, action)=>{
            const {user, accessToken} = action.payload
            state.user = user
            state.token = accessToken
        },

        logOut: (state)=>{
            state.user = null
            state.token = null
        }
    }
})

export const {setCredentials, logOut} = AuthSlice.actions

export default AuthSlice.reducer

// Selectors 

export const selectCurrentUser = (state: any) => state.auth.user
export const selectCurrentAccessToken = (state:any) => state.auth.token