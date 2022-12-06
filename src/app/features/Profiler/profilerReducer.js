import { createSlice } from '@reduxjs/toolkit'

export const profilerSlice = createSlice({
    name: 'profiler',
    initialState: {},
    reducers: {
        editName: (state) => {
            state.value = !state.value
        },
        changeName: (state, action) => {
            if (action.payload.length) {
                state.name = action.payload
            }
            state.value = !state.value
        },
        createProfile: (state, action) => {
            return { ...state, ...action.payload }
        },
    },
})

export const { changeName, editName, createProfile } = profilerSlice.actions
export default profilerSlice.reducer
