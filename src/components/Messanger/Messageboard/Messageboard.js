import styles from './messageboard.module.scss'
import MessageHead from "./MessageHead/MessageHead";
import MessageList from "./MessageList/MessageList";
import MessageSender from "./MessageSender/MessageSender";
import {useContext, useEffect, useRef, useState} from "react";
import {CurrentUserIdContext} from "../../../App";

export default () => {
    const [messages, setMessages] = useState([])
    const currentUserId = useContext(CurrentUserIdContext)
    useEffect(() => {
        let timerId
        if (currentUserId === messages[messages.length - 1]?.userId) {
            timerId = setTimeout(() => {
                setMessages(prev => [...prev, {
                    userId: 2,
                    image: "/img/bot.png",
                    name: 'Супер Бот',
                    body: 'Привет! Я бот. Может поболтаем?)))',
                    time: (new Date()).toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit'})
                }])
            }, 2000)
        }
        return () => clearInterval(timerId)
    }, [messages])
    return <div className={styles.message}>
        <MessageHead/>
        <MessageList messages={messages}  />
        <MessageSender setMessages={setMessages} messages={messages}/>
    </div>
}
