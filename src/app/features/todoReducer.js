import {createSlice} from "@reduxjs/toolkit";
import {fetchTodos} from "./thunks";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        error: null,
        status: null,
    },
    reducers: {
        removeTodo: (state, action) => {
            return {...state, todos: state.todos.filter(item => item.id !== action.payload)}
        },
        setCompleted: (state, action) => {
            state = {
                ...state, todos: state.todos.map(item => {
                    if (item.id === action.payload) {
                        item.completed = !item.completed
                    }
                })
            }
        }
    },
    extraReducers: {
        [fetchTodos.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null

        },
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.todos = action.payload

        },
        [fetchTodos.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload

        },
    }
})

export default todoSlice.reducer
export const {removeTodo, setCompleted} = todoSlice.actions