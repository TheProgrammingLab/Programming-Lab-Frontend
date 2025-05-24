"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface iPopupInfo {
    course_title: string,
    course_tutor: string,
    enrolled: boolean
}

interface iPopupState {
    value: {
       open: boolean,
       course_title: string,
       course_tutor: string,
       enrolled: boolean
    }
}


const initialState: iPopupState = {
    value: {
        open: false,
        course_title: '',
        course_tutor: '',
        enrolled: false
    }
}

const enrollPopupSlice = createSlice({
    name: 'enrollPopup',
    initialState,
    reducers: {
        openPoup: (state, action: PayloadAction<iPopupInfo>) => {
            state.value.open = true
            state.value.course_title = action.payload.course_title
            state.value.course_tutor = action.payload.course_tutor
            state.value.enrolled = action.payload.enrolled
        },
        closePopup: (state) => {
            state.value.open = false
            state.value.course_title = ''
            state.value.course_tutor = ''
            state.value.enrolled = false
        }
    }
})

export const { closePopup, openPoup } = enrollPopupSlice.actions;
export default enrollPopupSlice.reducer;