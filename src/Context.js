import {createContext, useState} from "react";
import uuid from "react-uuid";

export const CurrentUserIdContext = createContext(null)

export const ChatContext = createContext(null)

export const ChatListContext = ({children}) => {
    const [chatList, setChatList] = useState({
        room1: {
            chatName: 'Анна Верищагина',
            img: '/img/AvatarImage.png',
            status: 'online',
            messages: [],
        },
        room2: {
            chatName: 'Люда Петрова',
            img: '/img/AvatarImage.png',
            status: 'online',
            messages: []
        },
        room3: {
            chatName: 'Люда Петрова',
            img: '/img/AvatarImage.png',
            status: 'online',
            messages: []
        },


    })
    return <ChatContext.Provider value={{chatList, setChatList}}>
        {children}
    </ChatContext.Provider>
}
