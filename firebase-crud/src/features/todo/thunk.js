import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../api/apiInstance";

export const createTodo = createAsyncThunk('todos/createTodo', async(todo, {rejectWithValue}) => {
    try {
        let res = await apiInstance.post('/todos.json', todo);
        return {...todo, id:res.data.name};
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async(id, {rejectWithValue}) => {
    try {
        await apiInstance.delete(`/todos/${id}.json`);
        return id;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

export const updateTodo = createAsyncThunk('todos/updateTodo',async(todo,{rejectWithValue})=>{
    try {
        await apiInstance.patch(`/todos/${todo.id}.json`,todo)
        return todo;
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

export const getAllTodo = createAsyncThunk('todos/getAllTodo', async(_, {rejectWithValue}) => {
    try {
        let res = await apiInstance.get('/todos.json');
        return Object.keys(res.data).map((key) => {
            return {...res.data[key], id:key};
        })
    } catch (error) {
        return rejectWithValue(error.message);
    }
})