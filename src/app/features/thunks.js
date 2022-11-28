import {createAsyncThunk} from "@reduxjs/toolkit";
import {removeTodo, setCompleted} from "./todoReducer";

export const fetchTodosThunk = createAsyncThunk(
    'todos/fetchTodosThunk',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
            if (!response.ok) {
                throw new Error('Ошибка сервера!')
            }
            return await response.json()
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)
export const deleteTodoThunk = createAsyncThunk(
    'todos/deleteTodoThunk',
    async (id, thunkAPI) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Ошибка удаления!')
            }
            thunkAPI.dispatch(removeTodo(id))

            return await response.json()
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const completeTodoThunk = createAsyncThunk(
    'todos/completeTodoThunk',
    async (data, thunkAPI) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    completed: !data.completed,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            console.log(response)
            if (!response.ok) {
                throw new Error('Ошибка изменеиня статуса')
            }
            thunkAPI.dispatch(setCompleted(data.id))
            return await response.json()
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

