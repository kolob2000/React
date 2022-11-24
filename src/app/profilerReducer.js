import {createSlice} from "@reduxjs/toolkit";

export const profilerSlice = createSlice
({
    name: 'profiler',
    initialState: {
        id: 1,
        name: 'Анна Иванова',
        img: '/img/ProfileImage.png',
        email: 'mail@gmail.com',
        value: true
    },
    reducers: {
        editName: state => {
            state.value = !state.value
        },
        changeName: (state, action) => {
            console.log(action)
            if (action.payload.length) {
                state.name = action.payload
            }
            state.value = !state.value
        }
    }
})

export const {changeName, editName} = profilerSlice.actions
export default profilerSlice.reducer
