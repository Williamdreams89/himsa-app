import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { ApiSlice } from "./api/ApiSlice";
import authReducer from "../features/auth/AuthSlice"

export const store = configureStore({
    reducer: {
        [ApiSlice.reducerPath]: ApiSlice.reducer,
        auth: authReducer
    },

    middleware: getDefaultMiddleware().concat(ApiSlice.middleware),
    devTools: true
})