import { configureStore } from "@reduxjs/toolkit";
import MessageReducer from "./features/message"
import UserReducer from "./features/user"
import CourseReducer from "./features/courses"

export const store = configureStore({
    reducer: {
        messages: MessageReducer,
        user: UserReducer,
        courses: CourseReducer
    } 
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;