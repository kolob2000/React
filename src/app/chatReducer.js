import {createSlice} from "@reduxjs/toolkit";
import uuid from "react-uuid";


export const chatSlice = createSlice(
    {
        name: 'chat',
        initialState: {
            room3: {
                chatName: 'Анна Верищагина',
                img: '/img/AvatarImage.png',
                status: 'online',
                messages: [],
            },

        },
        reducers: {
            addChat: state => {
                const room = {
                    [uuid()]: {
                        chatName: 'Анна Верищагина',
                        img: '/img/AvatarImage.png',
                        status: 'online',
                        messages: [],

                    }
                }
                return state = {...state, ...room}
            },
            removeChat: (state, action) => {

                return state = (roomId => ({[roomId]: _, ...rest}) => rest)(action.payload.chatID)(state)
            },
            addMessage: (state, action) => {
                state[action.payload.chatID].messages.push(action.payload.message)
                state[action.payload.chatID].lastMessageTime = action.payload.message.time
                state[action.payload.chatID].lastMessageText = action.payload.message.body
                return state

            }
        }
    }
)
export const {addChat, removeChat, addMessage} = chatSlice.actions
export default chatSlice.reducer