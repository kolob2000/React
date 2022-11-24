import styles from './messagelist.module.scss'
import {useEffect, useRef} from "react";
import {useParams} from "react-router-dom";
import {useMessagesByRoomIdSelector} from "../../../../app/chatListSelectors";
import {useProfilerSelector} from "../../../../app/profilerSelectors";

const MessageList = () => {
    const {chatID} = useParams()
    const messages = useMessagesByRoomIdSelector(chatID)
    const messageListRef = useRef(null)
    const currentUser = useProfilerSelector()
    useEffect(() => {
        messageListRef.current?.scrollTo(0, messageListRef.current?.scrollHeight)
    })
    return <div className={styles.message_list_wrap}>
        <div className={styles.message_list} ref={messageListRef}>
            {messages && messages.map((message, index) => {
                return <div
                    className={currentUser.id === message.userId ? styles.message_item : styles.message_item + " " + styles.message_item_response}
                    key={index}>
                    <div className={styles.message_avatar}>
                        <img src={message.image} alt=""/>
                    </div>
                    <div className={styles.message_body}>
                        <div className={styles.message_info}>
                            <span className={styles.message_name}>{message.name}</span>
                            <span className={styles.message_time}>{message.time}</span>
                        </div>
                        <p className={styles.message_text}>{message.body}</p>
                    </div>
                </div>
            })}
        </div>
    </div>
}

export default MessageList