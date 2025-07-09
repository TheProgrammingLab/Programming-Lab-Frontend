import { configureStore } from "@reduxjs/toolkit";
import MessageReducer from "./features/message"
import UserReducer from "./features/user"

export const store = configureStore({
    reducer: {
        messages: MessageReducer,
        user: UserReducer
    } 
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;