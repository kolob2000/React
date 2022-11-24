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
            addChat: {
                reducer(state, action) {
                    // console.log(action)
                    // const room = {
                    //     [uuid()]: {
                    //         chatName: 'Анна Верищагина',
                    //         img: '/img/AvatarImage.png',
                    //         status: 'online',
                    //         messages: [],
                    //
                    //     }
                    // }
                    console.log(action.payload)
                    return state = {...state, ...action.payload}

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

                            }
                        }
                    }
                }

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