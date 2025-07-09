import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type T_User = {
    id: string,
    username: string;
    email: string;
    role: "student" | "tutor" | "admin"
}

const initialState: { value: T_User} = {
    value: {
        id: "",
        username: "",
        email: "",
        role: "student"
    }
}

const UserSlice = createSlice({
    name: "sser",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<T_User>) => {
            state.value = action.payload
        }
    }
})

export default UserSlice.reducer
export const { setUser } = UserSlice.actions