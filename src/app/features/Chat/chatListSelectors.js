import {useSelector} from "react-redux";

export const useChatListSelector = () => {
    const {chatList} = useSelector(state => state)
    return chatList
}

export const useMessagesByRoomIdSelector = (chatID) => {
    const chatList = useChatListSelector()
    return chatList[chatID].messages
}