import { createSlice } from '@reduxjs/toolkit'
import { fetchLoginThunk, fetchRegThunk } from './thunks'

const initialState = {
    status: null,
    error: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchRegThunk.pending, (state, action) => {})
            .addCase(fetchRegThunk.fulfilled, (state, action) => {
                console.log(action.payload, ' from payload')
            })
            .addCase(fetchRegThunk.rejected, (state, action) => {})
            .addCase(fetchLoginThunk.pending, (state, action) => {})
            .addCase(fetchLoginThunk.fulfilled, (state, action) => {})
            .addCase(fetchLoginThunk.rejected, (state, action) => {})
    },
})

export default authSlice.reducer
