import { configureStore } from "@reduxjs/toolkit";
import EnrollPopup from './enrollPopup'

export const store = configureStore({
    reducer: {
        enrollPopup: EnrollPopup
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;