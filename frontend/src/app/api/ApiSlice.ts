import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import { setCredentials, logOut } from "../../features/auth/AuthSlice"

const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:8001",
    credentials: "include",
    prepareHeaders: (headers, {getState}:any)=>{
        const token = getState().auth.token
        if(token){
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args: any, api: any, extraOptions:any)=>{
    let results = await baseQuery(args, api, extraOptions)
    if(results?.error?.status===403){
        console.log("Sending refresh token!")
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        console.log('newRefreshToken', refreshResult)
        if(refreshResult?.data){
            const user = api.getState().auth.user
            // Store the new token
            api.dispatch(setCredentials({...refreshResult.data, user}))
            // retry the initial query wth the new token
            results = await baseQuery(args, api, extraOptions)
        }else{
            api.dispatch(logOut())
        }
    }
    return results
}

export const ApiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({
        loginUser: builder.mutation({
            query: (loginCredentials)=>({
                url: '/api/login',
                method: 'POST',
                body: {...loginCredentials}
            })
        }),
    })
})

export const {useLoginUserMutation} = ApiSlice