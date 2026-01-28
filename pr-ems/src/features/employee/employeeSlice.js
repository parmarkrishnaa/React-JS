import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    employees: []
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    removeEmployee: (state, action) => {
      state.employees = state.employees.filter(emp => emp.id !== action.payload);
    }
  }
})

export default employeeSlice.reducer;
export const { addEmployee, removeEmployee } = employeeSlice.actions;