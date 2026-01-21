import { createSlice } from "@reduxjs/toolkit";
import { createTodo, deleteTodo, getAllTodo } from "./thunk";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        loading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(createTodo.fulfilled, (state, action) => {
            state.todos.push(action.payload);
            state.loading = false;
        })

        builder.addCase(createTodo.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(createTodo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        builder.addCase(deleteTodo.pending, (state) => {
            state.loading = true;
        })

        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = state.todos.filter(val => val.id != action.payload);
        })

        builder.addCase(deleteTodo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })

        builder.addCase(updateTodo.pending, (state) => {
            state.formLoading = true;
        });

        builder.addCase(updateTodo.fulfilled, (state, action) => {
            state.formLoading = false;
            state.todos = state.todos.map(todo =>
                todo.id === action.payload.id ? action.payload : todo
            );
        });

        builder.addCase(updateTodo.rejected, (state, action) => {
            state.formLoading = false;
            state.error = action.payload;
        });

        builder.addCase(getAllTodo.fulfilled, (state, action) => {
            state.loading = false;
            state.todos = action.payload;
        })

        builder.addCase(getAllTodo.pending, (state) => {
            state.loading = true;
            state.error = null;
        })

        builder.addCase(getAllTodo.rejected, (state, action) => {
            state.loading = true;
            state.error = action.error.message;
        })
    }
})

export default todoSlice.reducer;