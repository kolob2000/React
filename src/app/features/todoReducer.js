import {createSlice} from "@reduxjs/toolkit";
import {deleteTodoThunk, fetchTodosThunk} from "./thunks";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
        error: null,
        status: null,
        deleteError: null,
        deleteStatus: null,

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
    extraReducers: (builder) => {
        builder.addCase(fetchTodosThunk.pending, (state, action) => {
            state.status = 'pending'
            state.error = null
        }).addCase(fetchTodosThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.todos = action.payload
        }).addCase(fetchTodosThunk.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        })
           //delete todo
            .addCase(deleteTodoThunk.pending, (state, action) => {
            state.deleteStatus = 'pending'
            state.deleteError = null
        }).addCase(deleteTodoThunk.fulfilled, (state, action) => {
            state.deleteStatus = 'fulfilled'
            console.log(action.payload)
        }).addCase(deleteTodoThunk.rejected, (state, action) => {
            state.deleteStatus = 'rejected'
            state.deleteError = action.payload
        })


    }
})

export default todoSlice.reducer
export const {removeTodo, setCompleted} = todoSlice.actions