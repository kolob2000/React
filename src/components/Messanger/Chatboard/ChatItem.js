import { useEffect, useRef } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import style from './chatboard.scss'
import { useDispatch, useSelector } from 'react-redux'
import { removeChat } from '../../../app/features/Chat/chatReducer'
import { addSnapshotOnChatImage } from '../../../app/features/Chat/middleware/middleware'
import avatarsRedusers from '../../../app/features/avatarsRedusers'

export default ({ chatItem, roomId }) => {
    const chatsAvatar = useSelector((state) => state.avatars)
    console.log(chatsAvatar, 'chat avatars')
    const contextMenuRef = useRef(null)
    const { chatID } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const listener = (e) => {
        if (
            e.target !== contextMenuRef.current &&
            !contextMenuRef.current?.classList.contains('hidden')
        ) {
            contextMenuRef.current?.classList.toggle('hidden')

            document.removeEventListener('click', listener)
            document.removeEventListener('contextmenu', listener)
        }
    }

    useEffect(() => {
        return () => {
            if (!contextMenuRef.current?.classList.contains('hidden')) {
                contextMenuRef.current?.classList.toggle('hidden')
            }
            document.removeEventListener('click', listener)
            document.removeEventListener('contextmenu', listener)
        }
    })
    const handleContext = (e) => {
        e?.preventDefault()
        e?.stopPropagation()

        if (!contextMenuRef.current?.classList.contains('hidden')) {
            contextMenuRef.current?.classList.toggle('hidden')
            document.removeEventListener('click', listener)
            document.removeEventListener('contextmenu', listener)
        } else {
            contextMenuRef.current?.classList.toggle('hidden')
            document.addEventListener('click', listener)
            document.addEventListener('contextmenu', listener)
        }
    }
    const handleDeleteClick = (e) => {
        e.preventDefault()
        dispatch(removeChat({ chatID }))
        chatID && chatID === roomId && navigate('/messanger')
    }
    useEffect(() => {
        dispatch(addSnapshotOnChatImage(chatItem.user))
    }, [])

    return (
        <NavLink
            to={`/messanger/${roomId}`}
            className="chat_item"
            onContextMenu={handleContext}
        >
            <button
                ref={contextMenuRef}
                className={'context-menu hidden'}
                onClick={handleDeleteClick}
                data-room={roomId}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill=""
                >
                    <path
                        d="M5.28125 0.691406C5.49219 0.265625 5.92578 0 6.39844 0H11.1016C11.5742 0 12.0078 0.265625 12.2188 0.691406L12.5 1.25H16.25C16.9414 1.25 17.5 1.80859 17.5 2.5C17.5 3.19141 16.9414 3.75 16.25 3.75H1.25C0.558594 3.75 0 3.19141 0 2.5C0 1.80859 0.558594 1.25 1.25 1.25H5L5.28125 0.691406ZM1.25 5H16.25V17.5C16.25 18.8789 15.1289 20 13.75 20H3.75C2.37109 20 1.25 18.8789 1.25 17.5V5ZM5 7.5C4.65625 7.5 4.375 7.78125 4.375 8.125V16.875C4.375 17.2188 4.65625 17.5 5 17.5C5.34375 17.5 5.625 17.2188 5.625 16.875V8.125C5.625 7.78125 5.34375 7.5 5 7.5ZM8.75 7.5C8.40625 7.5 8.125 7.78125 8.125 8.125V16.875C8.125 17.2188 8.40625 17.5 8.75 17.5C9.09375 17.5 9.375 17.2188 9.375 16.875V8.125C9.375 7.78125 9.09375 7.5 8.75 7.5ZM12.5 7.5C12.1562 7.5 11.875 7.78125 11.875 8.125V16.875C11.875 17.2188 12.1562 17.5 12.5 17.5C12.8438 17.5 13.125 17.2188 13.125 16.875V8.125C13.125 7.78125 12.8438 7.5 12.5 7.5Z"
                        fill=""
                    />
                </svg>
            </button>
            <div className="chat_photo">
                <img
                    src={chatsAvatar[chatItem.user]}
                    alt=""
                    className="chat_img"
                />
                <div className={`status_light status_${chatItem.status}`}></div>
            </div>
            <div className="chat_info">
                <div className="chat_info_top">
                    <div className="info_status">{chatItem.status}</div>
                    <div className="last_message">
                        {chatItem.lastMessageTime}
                    </div>
                </div>
                <p className="chat_name">{chatItem.chatName}</p>
                <p className="last_message_text">{chatItem.lastMessageText}</p>
            </div>
        </NavLink>
    )
}
