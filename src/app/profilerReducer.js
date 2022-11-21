import {createSlice} from "@reduxjs/toolkit";

export const profilerSlice = createSlice
({
    name: 'profiler',
    initialState: {
        id: 1,
        name: '',
        img: '/img/ProfileImage.png',
        value: true
    },
    reducers: {
        changeCheckBox: state => {
            state.value = !state.value
        }
    }
})

export const {changeCheckBox} = profilerSlice.actions
export default profilerSlice.reducer
