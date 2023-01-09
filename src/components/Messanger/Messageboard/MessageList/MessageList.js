import styles from './messagelist.module.scss'
import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useMessagesByRoomIdSelector } from '../../../../app/features/Chat/chatListSelectors'
import { useProfilerSelector } from '../../../../app/features/Profiler/profilerSelectors'
import { onMessagesInit } from '../../../../app/features/Chat/middleware/middleware'
import { useDispatch, useSelector } from 'react-redux'

const MessageList = () => {
    const { chatID } = useParams()
    const chatsAvatar = useSelector((state) => state.avatars)
    const messages = useMessagesByRoomIdSelector(chatID)
    const messageListRef = useRef(null)
    const currentUser = useProfilerSelector()
    const dispatch = useDispatch()
    useEffect(() => {
        messageListRef.current?.scrollTo(
            0,
            messageListRef.current?.scrollHeight
        )
    })
    useEffect(() => {
        dispatch(onMessagesInit(chatID))
    }, [chatID])
    return (
        <div className={styles.message_list_wrap}>
            <div className={styles.message_list} ref={messageListRef}>
                {messages &&
                    messages.map((message, index) => {
                        return (
                            <div
                                className={
                                    currentUser.uid !== message.uid
                                        ? styles.message_item
                                        : styles.message_item +
                                          ' ' +
                                          styles.message_item_response
                                }
                                key={index}
                            >
                                <div className={styles.message_avatar}>
                                    <img
                                        src={
                                            currentUser.uid !== message.uid
                                                ? chatsAvatar[message.uid]
                                                : currentUser.img
                                        }
                                        alt=""
                                    />
                                </div>
                                <div className={styles.message_body}>
                                    <div className={styles.message_info}>
                                        <span className={styles.message_name}>
                                            {message.name}
                                        </span>
                                        <span className={styles.message_time}>
                                            {message.time}
                                        </span>
                                    </div>
                                    <p className={styles.message_text}>
                                        {message.body}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default MessageList
