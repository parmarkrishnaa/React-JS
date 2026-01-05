import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'data',
    initialState: {
        data: []
    },
    reducers: {
        addUser: (state, action) => {
            state.data.push(action.payload);
        },
        editUser: (state, action) => {
            state.data = state.data.find(user => user.id === action.payload);
        },
        deleteUser: (state, action) => {
            state.data = state.data.filter(user => user.id !== action.payload);
        }
    }
})

export default userSlice.reducer;
export const {addUser, deleteUser} = userSlice.actions;