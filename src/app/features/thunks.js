import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('http://jsonplaceholder.typicode.com/todos?_limit=20')
            if(!response.ok){
                throw new Error('Ошибка сервера!')
            }
            return await response.json()
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

