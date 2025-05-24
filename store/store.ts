import { configureStore } from "@reduxjs/toolkit";
import EnrollPopup from './enrollPopup'
import courseListFilter from './courseListFilter'

export const store = configureStore({
    reducer: {
        enrollPopup: EnrollPopup,
        courseListFilter: courseListFilter
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;