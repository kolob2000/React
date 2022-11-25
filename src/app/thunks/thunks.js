import {addMessage, setDelay} from "../chatReducer";

export const sendMessageWithThunk = (chatID, message) => (dispatch, getState) => {

    dispatch(addMessage({chatID, message}))
    const {chatList} = getState()
    console.log(chatList.delay)
    message = {
        userId: 2,
        image: '/img/bot.png',
        name: chatList[chatID].chatName,
        body: `Привет! Я ${chatList[chatID].chatName}. Может поболтаем??))`,
        time: (new Date()).toLocaleTimeString('ru', {hour: '2-digit', minute: '2-digit'})
    }
    console.log('after message')

    if (!chatList.delay) {
        dispatch(setDelay())
        setTimeout(() => {

            dispatch(addMessage({chatID, message}))
            dispatch(setDelay())
        }, 2000)
    }

}
