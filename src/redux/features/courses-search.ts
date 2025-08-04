import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type T_Course = {
    niche: string;
    title: string;
    id: string;
    description: string;
    thumbnail: string;
    tutor: string;
    slug: string;
    createdAt: number;
    state: string;
}

type T_Response = {
    courses: T_Course[],
    page: number,
    total_pages: number
}

const initialState: { value: T_Response} = {
    value: {
        courses: [],
        page: 0,
        total_pages: 0
    }
}

const CoursesSearchSlice = createSlice({
    name: "courses_search",
    initialState,
    reducers: {
        setCourses: (state, action: PayloadAction<T_Response>) => {
            state.value = action.payload
        },

        addCourses: (state, action: PayloadAction<{ courses: T_Course[], page: number }>) => {
            action.payload.courses.map((course) => {
                state.value.courses.push(course)
            })

            state.value.page = action.payload.page
        },

        clearSearch: (state) =>  {
            state.value.courses = []
        }

    }
})

export default CoursesSearchSlice.reducer
export const { setCourses, addCourses } = CoursesSearchSlice.actions