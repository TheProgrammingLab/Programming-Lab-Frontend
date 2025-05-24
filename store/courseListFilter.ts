import { createSlice } from "@reduxjs/toolkit";

interface iCourseListFilterState {
    value: 'All' | 'Enrolled'
}

const initialState: iCourseListFilterState = {
    value: 'All'
}

const CourseListSlice = createSlice({
    name: 'courseList',
    initialState,
    reducers: {
        setToAll: (state) => {
            state.value = 'All'
        },
        setToEnrolled: (state) => {
            state.value = 'Enrolled'
        }
    }
})

export const { setToAll, setToEnrolled } = CourseListSlice.actions;
export default CourseListSlice.reducer;