import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employee: []
    },
    reducers: {
        addEmp: (state,action) => {
            state.employee.push(action.payload)
        },
        editEmp: (state,action) => {
            state.employee.find(emp => emp.id === action.payload.id)
        },
        deleteEmp: (state,action) => {
            state.employee.filter(emp => emp.id !== action.payload.id)
        }
    }
})

export default employeeSlice.reducer;
export const {addEmp, editEmp, deleteEmp} = employeeSlice.actions;