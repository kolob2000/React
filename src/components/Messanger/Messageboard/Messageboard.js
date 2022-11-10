import styles from './messageboard.module.scss'
import MessageHead from "./MessageHead/MessageHead";
import MessageList from "./MessageList/MessageList";
import MessageSender from "./MessageSender/MessageSender";
import {useContext, useEffect, useState} from "react";
import {ChatContext, CurrentUserIdContext} from "../../../Context";
import {useParams} from "react-router-dom";

export default () => {
    const [messages, setMessages] = useState([])
    const currentUserId = useContext(CurrentUserIdContext)
    const {chatID} = useParams()
    const {chatList, setChatList} = useContext(ChatContext)
    useEffect(() => {
        let timerId
        if (chatList[chatID].messages.length && currentUserId === chatList[chatID].messages[chatList[chatID].messages.length - 1].userId) {
            timerId = setTimeout(() => {
                setChatList(prev => {
                    return (
                        {
                            ...prev,
                            [chatID]: {
                                chatName: 'Анна Верищагина',
                                img: '/img/AvatarImage.png',
                                status: 'online',
                                messages: [...chatList[chatID].messages, {
                                    userId: 2,
                                    image: "/img/bot.png",
                                    name: 'Супер Бот',
                                    body: 'Привет! Я бот. Может поболтаем?)))',
                                    time: (new Date()).toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit'})
                                }],
                                get lastMessageTime() {
                                    return this.messages[this.messages.length - 1].time
                                },
                                get lastMessageText() {
                                    return this.messages[this.messages.length - 1].body
                                },
                            }
                        }
                    )
                })

            }, 2000)
        }
        return () => clearInterval(timerId)
    }, [chatList[chatID].messages])
    return <div className={styles.message}>
        <MessageHead/>
        <MessageList messages={messages}/>
        <MessageSender/>
    </div>
}
