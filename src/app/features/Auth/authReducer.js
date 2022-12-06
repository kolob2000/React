import { createSlice } from '@reduxjs/toolkit'
import { fetchLoginThunk, fetchRegThunk } from './thunks'

const initialState = {
    email: null,
    uid: null,
    emailVerified: null,
    isAuth: null,
    status: null,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            return { ...state, ...action.payload }
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchRegThunk.pending, (state, action) => {})
            .addCase(fetchRegThunk.fulfilled, (state, action) => {
                state = {
                    ...state,
                    ...action.payload,
                }

                return state
            })
            .addCase(fetchRegThunk.rejected, (state, action) => {})
            .addCase(fetchLoginThunk.pending, (state, action) => {})
            .addCase(fetchLoginThunk.fulfilled, (state, action) => {
                state = {
                    ...state,
                    ...action.payload,
                }
                return state
            })
            .addCase(fetchLoginThunk.rejected, (state, action) => {})
    },
})

export default authSlice.reducer
export const { setAuth } = authSlice.actions
