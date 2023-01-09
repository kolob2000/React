import {
    collection,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    query,
    updateDoc,
} from 'firebase/firestore'
import { db, storage } from '../../../../firebase'
import { createProfile, editName } from '../profilerReducer'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { initChats } from '../../Chat/chatReducer'

export const onInitProfile = (uid) => (dispatch) => {
    const userDoc = doc(db, 'users', uid)
    onSnapshot(userDoc, (doc) => {
        console.log('from profile snapshot')
        dispatch(createProfile(doc.data()))
    })
}
export const editNameWithFirebase = async (uid) => {
    const userDocRef = doc(db, 'users', uid)
    const userDoc = await getDoc(userDocRef)
    const { value } = userDoc.data()
    try {
        await updateDoc(userDocRef, {
            value: !value,
        })
    } catch (e) {
        console.log(e.message)
    }
}

export const changeNameWithFirebase = async (uid, name) => {
    try {
        const userDocRef = doc(db, 'users', uid)
        const userDoc = await getDoc(userDocRef)
        const { value } = userDoc.data()
        if (name.length) {
            await updateDoc(userDocRef, {
                name: name,
            })
        }
        await updateDoc(userDocRef, {
            value: !value,
        })
    } catch (e) {
        console.log(e.message)
    }
}
export const changeAvatarWithFirebase = async (uid, path) => {
    try {
        const fullpath = `${await getDownloadURL(ref(storage, path))}`
        console.log('im here')
        const userDocRef = doc(db, 'users', uid)
        await updateDoc(userDocRef, {
            img: fullpath,
        })
    } catch (e) {
        console.log(e.message)
    }
}
export const updateAvatarThunk = async (storageRef, img, profiler, path) => {
    try {
        console.log('in thunk')
        await uploadString(storageRef, img, 'data_url')
        await changeAvatarWithFirebase(profiler.uid, path)
    } catch (e) {
        console.log(e.message)
    }
}
