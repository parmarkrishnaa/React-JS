import { createSlice, nanoid } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'Users',
    initialState: {
        users: [],
        editData: {},
        editID: null
    },
    reducers: {
        addUser : (state,action) => {
            if(){
                
            }else{
                state.users.push({...action.payload, id:nanoid()})
            }
        },
        deleteUser : (state, action) => {
            let index = state.users.findIndex((val) => val.id == action.payload);
            state.users.splice(index,1);
        },
        editUser : (state, action) => {
            state.editData = state.users.find((val) => val.id == action.payload);
            state.editID = action.payload;
        }
    }
})

export default userSlice.reducer;
export const {addUser, editUser, deleteUser} = userSlice.actions;