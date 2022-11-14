import styles from './messagelist.module.scss'
import {useContext, useEffect, useRef} from "react";
import {CurrentUserIdContext, ChatContext} from "../../../../Context";
import {useParams} from "react-router-dom";

export default (props) => {
    const {chatID} = useParams()
    const {chatList} = useContext(ChatContext)
    const messages = chatList[chatID].messages
    const messageListRef = useRef(null)
    const currentUserId = useContext(CurrentUserIdContext)
    useEffect(() => {
        messageListRef.current?.scrollTo(0, messageListRef.current?.scrollHeight)
    })
    return <div className={styles.message_list_wrap}>
        <div className={styles.message_list} ref={messageListRef}>
            {messages && messages.map((message, index) => {
                return <div
                    className={currentUserId === message.userId ? styles.message_item : styles.message_item + " " + styles.message_item_response}
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
