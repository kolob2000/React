import styles from './messageboard.module.scss'
import MessageHead from "./MessageHead/MessageHead";
import MessageList from "./MessageList/MessageList";
import MessageSender from "./MessageSender/MessageSender";
import {useNavigate, useParams} from "react-router-dom";
import {useChatListSelector} from "../../../app/chatListSelectors";

export default () => {
    const {chatID} = useParams()
    const chatList = useChatListSelector()
    const navigate = useNavigate()
    if (!chatList[chatID]) {
        navigate('/messanger')
        return ''
    }
    return <div className={styles.message}>
        <MessageHead/>
        <MessageList/>
        <MessageSender/>
    </div>
}
