import { createSlice } from '@reduxjs/toolkit'

export const avatarSlice = createSlice({
    initialState: {},
    name: 'avatars',
    reducers: {
        addAvatarImage: (state, action) => {
            state = {
                ...state,
                [action.payload.uid]: action.payload.img,
            }
            return state
        },
    },
})

export default avatarSlice.reducer
export const { addAvatarImage } = avatarSlice.actions
