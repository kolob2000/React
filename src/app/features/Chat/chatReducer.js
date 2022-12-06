import { createSlice } from '@reduxjs/toolkit'
import uuid from 'react-uuid'

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {},
    reducers: {
        initChats: (state, action) => {
            state = { ...action.payload }
            return state
        },
        setDelay: (state) => {
            state.delay = !state.delay
        },
        initMessages: (state, action) => {
            state = {
                ...state,

                [action.payload.chatID]: {
                    ...state[action.payload.chatID],
                    messages: action.payload.messages,
                },
            }
            return state
        },
        addChat: {
            reducer(state, action) {
                return (state = { ...state, ...action.payload })
            },
            prepare(chatName, email) {
                return {
                    payload: {
                        [uuid()]: {
                            chatName,
                            email,
                            img: '/img/AvatarImage.png',
                            status: 'online',
                            messages: [],
                        },
                    },
                }
            },
        },
        removeChat: (state, action) => {
            return (state = (
                (roomId) =>
                ({ [roomId]: _, ...rest }) =>
                    rest
            )(action.payload.chatID)(state))
        },
        addMessage: (state, action) => {
            state[action.payload.chatID].messages.push(action.payload.message)
            state[action.payload.chatID].lastMessageTime =
                action.payload.message.time
            state[action.payload.chatID].lastMessageText =
                action.payload.message.body
            return state
        },
    },
})
export const {
    addChat,
    removeChat,
    addMessage,
    setDelay,
    initChats,
    initMessages,
} = chatSlice.actions
export default chatSlice.reducer
