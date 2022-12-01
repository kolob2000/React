import { createSlice } from '@reduxjs/toolkit'

export const profilerSlice = createSlice({
    name: 'profiler',
    initialState: {
        uid: '',
        name: 'edit name',
        img: '/img/ProfileImage.png',
        email: '',
        value: true,
    },
    reducers: {
        editName: (state) => {
            state.value = !state.value
        },
        changeName: (state, action) => {
            console.log(action)
            if (action.payload.length) {
                state.name = action.payload
            }
            state.value = !state.value
        },
        createProfile: (state, action) => {
            console.log('before dispatch')
            console.log(action.payload)
            return { ...state, ...action.payload }
        },
    },
})

export const { changeName, editName, createProfile } = profilerSlice.actions
export default profilerSlice.reducer
