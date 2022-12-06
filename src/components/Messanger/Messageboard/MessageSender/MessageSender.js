import styles from './messagesender.module.scss'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useChatListSelector } from '../../../../app/features/Chat/chatListSelectors'
import { useProfilerSelector } from '../../../../app/features/Profiler/profilerSelectors'
import { sendMessageWithThunk } from '../../../../app/thunks/thunks'
import { sendMessageWithFirebase } from '../../../../app/features/Chat/middleware/middleware'

const MessageSender = () => {
    const currentUser = useProfilerSelector()
    const [value, setValue] = useState('')
    const inputRef = useRef(null)
    const chatList = useChatListSelector()
    useEffect(() => inputRef.current?.focus())
    const dispatch = useDispatch()
    const { chatID } = useParams()
    const navigate = useNavigate()

    // function sendMessage(user, text) {
    //     if (!chatList[chatID]) {
    //         navigate('/messanger')
    //         return ''
    //     }
    //     if (text.length) {
    //         const message = {
    //             userId: user,
    //             image:
    //                 currentUser.uid === user
    //                     ? '/img/AvatarImage.png'
    //                     : '/img/bot.png',
    //             name:
    //                 currentUser.uid === user
    //                     ? currentUser.name
    //                     : chatList[chatID].chatName,
    //             body: text.toString(),
    //             time: new Date().toLocaleTimeString('ru', {
    //                 hour: '2-digit',
    //                 minute: '2-digit',
    //             }),
    //         }
    //         dispatch(sendMessageWithThunk(chatID, message))
    //
    //         if (user === currentUser.uid) setValue('')
    //     }
    // }

    const sendMessage = async () => {
        if (value.length) {
            const message = value
            setValue('')
            await sendMessageWithFirebase(currentUser, chatID, message)
        }
    }

    const handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            await sendMessage()
        }
    }

    return (
        <div className={styles.message_sender}>
            <button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill=""
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.2539 19.5H9.67393C7.58393 19.5 5.72393 17.97 5.52393 15.89C5.29393 13.51 7.16393 11.5 9.50393 11.5H21.8639C23.1739 11.5 24.3639 12.44 24.4939 13.74C24.6439 15.24 23.4739 16.5 22.0039 16.5H11.5039C10.9539 16.5 10.5039 16.05 10.5039 15.5C10.5039 14.95 10.9539 14.5 11.5039 14.5H20.2539C20.6639 14.5 21.0039 14.16 21.0039 13.75C21.0039 13.34 20.6639 13 20.2539 13H11.6439C10.3339 13 9.14393 13.94 9.01393 15.24C8.86393 16.74 10.0339 18 11.5039 18H21.8339C23.9239 18 25.7839 16.47 25.9839 14.39C26.2139 12 24.3439 10 22.0039 10H9.73393C6.86393 10 4.29393 12.1 4.02393 14.96C3.72393 18.25 6.28393 21 9.50393 21H20.2539C20.6639 21 21.0039 20.66 21.0039 20.25C21.0039 19.84 20.6639 19.5 20.2539 19.5Z"
                        fill=""
                    />
                </svg>
            </button>
            <button>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill=""
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24 22V8C24 6.9 23.1 6 22 6H8C6.9 6 6 6.9 6 8V22C6 23.1 6.9 24 8 24H22C23.1 24 24 23.1 24 22ZM11.9 16.98L14 19.51L17.1 15.52C17.3 15.26 17.7 15.26 17.9 15.53L21.41 20.21C21.66 20.54 21.42 21.01 21.01 21.01H9.02C8.6 21.01 8.37 20.53 8.63 20.2L11.12 17C11.31 16.74 11.69 16.73 11.9 16.98Z"
                        fill=""
                    />
                </svg>
            </button>
            <input
                ref={inputRef}
                type="text"
                placeholder="Сообщение"
                onKeyDown={handleKeyDown}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button onClick={() => sendMessage(currentUser.uid, value)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill=""
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.4 23.8849L23.85 16.4049C24.66 16.0549 24.66 14.9149 23.85 14.5649L6.4 7.08488C5.74 6.79488 5.01 7.28488 5.01 7.99488L5 12.6049C5 13.1049 5.37 13.5349 5.87 13.5949L20 15.4849L5.87 17.3649C5.37 17.4349 5 17.8649 5 18.3649L5.01 22.9749C5.01 23.6849 5.74 24.1749 6.4 23.8849Z"
                        fill=""
                    />
                </svg>
            </button>
        </div>
    )
}
export default MessageSender
