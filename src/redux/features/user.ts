import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type T_User = {
    id: string,
    username: string;
    email: string;
    role: "student" | "tutor" | "admin",
    verified: boolean
}

const initialState: { value: T_User} = {
    value: {
        id: "1234",
        username: "",
        email: "",
        role: "student",
        verified: true
    }
}

const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<T_User>) => {
            state.value = action.payload
        }
    }
})

export default UserSlice.reducer
export const { setUser } = UserSlice.actions