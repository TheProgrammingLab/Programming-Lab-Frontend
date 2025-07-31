import { createSlice } from "@reduxjs/toolkit";


type T_InitialState = {
    value: boolean
}

const initialState: T_InitialState = {
    value: false
}

const SliderSlice = createSlice({
    name: "slider",
    initialState,
    reducers: {
        openSlider: (state) => {
            state.value = true
        },

        closeSlider: (state) => {
            state.value = false
        }
    }
})

export default SliderSlice.reducer;
export const { openSlider, closeSlider } = SliderSlice.actions;