import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type T_User = {
  id: string;
  username: string;
  email: string;
  role: "student" | "tutor" | "admin";
  verified: boolean;
  token?: string;
};

const initialState: { value: T_User } = {
  value: {
    id: "",
    username: "",
    email: "",
    role: "student",
    verified: false,
    token: "",
  },
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<T_User>) => {
      state.value = action.payload;
    },
    updateUserToken: (state, action: { payload: string }) => {
      state.value.token = action.payload;
    },
  },
});

export default UserSlice.reducer;
export const { setUser, updateUserToken } = UserSlice.actions;
