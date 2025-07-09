import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { generateRandomId } from "../../utils/functions";

type T_message = {
    id: string,
    label: string;
    type: "passed" | "failed" | "warning"
}

const initialState: { value: T_message[]} = {
    value: []
}

const MessageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<Omit<T_message, 'id'>>) => {
            state.value.push({
                id: generateRandomId(),
                label: action.payload.label,
                type: action.payload.type
            })
        },

        removeMessage: (state, action: PayloadAction<string>) => {
            state.value = state.value.filter(message => message.id != action.payload)
        },

        clearAllMessage: (state) => {
            state.value = []
        } 

    }
})

export default MessageSlice.reducer
export const { addMessage, removeMessage, clearAllMessage } = MessageSlice.actions