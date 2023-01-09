import {
    collection,
    addDoc,
    doc,
    setDoc,
    query,
    where,
    getDocs,
    getDoc,
    onSnapshot,
    orderBy,
} from 'firebase/firestore'
import { db } from '../../../../firebase'
import { useProfilerSelector } from '../../Profiler/profilerSelectors'
import { addMessage, initChats, initMessages } from '../chatReducer'
import { storage } from '../../../../firebase'
import { ref, getDownloadURL } from 'firebase/storage'
import { useRef } from 'react'
import { addAvatarImage } from '../../avatarsRedusers'

const getUserIdByEmail = async (email) => {
    const q = query(collection(db, 'users'), where('email', '==', email))
    let userID = null
    let userImg = null
    const qSnapshots = await getDocs(q)
    qSnapshots.forEach((item) => {
        userID = item.id
        userImg = item.data().img
    })
    return { userID, userImg }
}
export const addSnapshotOnChatImage = (uid) => (dispatch) => {
    const userRef = doc(db, `users/${uid}`)
    onSnapshot(doc(db, 'users', uid), (doc) => {
        if (doc.data()) {
            const { uid, img } = doc.data()

            dispatch(addAvatarImage({ uid, img }))
        } else {
            console.log('undefined')
        }
    })
}
export const addChatWithFirebase = async (profiler, chatName, chatEmail) => {
    const { userID, userImg } = await getUserIdByEmail(chatEmail)
    const chatsColRef = collection(db, 'chats')
    const newChat = await addDoc(chatsColRef, {
        users: [profiler.uid, userID],
    })
    const userChatRef = doc(db, 'users', profiler.uid, 'chats', newChat.id)
    const secondUserChatRef = doc(db, 'users', userID, 'chats', newChat.id)
    await setDoc(userChatRef, {
        id: newChat.id,
        chatName,
        email: chatEmail,
        user: userID,
        img: userImg,
    })
    await setDoc(secondUserChatRef, {
        id: newChat.id,
        chatName: profiler.name,
        email: profiler.email,
        user: profiler.uid,
        img: profiler.img,
    })
}

export const onChatListInit = (uid) => async (dispatch) => {
    const chatsRef = collection(db, 'users', uid, 'chats')
    const usersId = []
    onSnapshot(chatsRef, async () => {
        const q = query(chatsRef)
        const chats = await getDocs(q)
        const ch = {}
        chats.forEach((observer) => {
            ch[observer.id] = observer.data()
            usersId.push(observer.id)
        })
        dispatch(initChats(ch))
    })
}
export const onMessagesInit = (chatID) => (dispatch) => {
    const colByID = collection(db, 'chats', chatID, 'messages')
    onSnapshot(colByID, async (col) => {
        const q = query(colByID, orderBy('created_at', 'asc'))
        const messages = await getDocs(q)
        const mess = []
        messages.forEach((doc) => {
            mess.push(doc.data())
        })
        dispatch(initMessages({ chatID: chatID, messages: mess }))
    })
}

export const sendMessageWithFirebase = async (profiler, chatID, value) => {
    const chatColRef = collection(db, 'chats', chatID, 'messages')
    await addDoc(chatColRef, {
        uid: profiler.uid,
        body: value,
        time: new Date().toLocaleTimeString('ru', {
            hour: '2-digit',
            minute: '2-digit',
        }),
        created_at: Date.now(),
        name: profiler.name,
        image: profiler.img,
    })
}
