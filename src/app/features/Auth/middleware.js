import { doc, setDoc, onSnapshot } from 'firebase/firestore'
import {
    ref,
    getDownloadURL,
    getBytes,
    uploadBytes,
    uploadString,
} from 'firebase/storage'
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { db, storage } from '../../../firebase'
import { setAuth } from './authReducer'

const auth = getAuth()

export const signupThunk = (userCredential) => async (dispatch, getState) => {
    try {
        const { user } = await createUserWithEmailAndPassword(
            auth,
            userCredential.email,
            userCredential.password
        )
        const userDoc = doc(db, 'users', user.uid)
        await sendEmailVerification(auth.currentUser, {
            url: 'http://localhost:3000/messanger',
            handleCodeInApp: true,
        })
        const res = await fetch('/img/profile_blue.png')
        const blob = await res.blob()
        const path = `/profile/${user.uid}${Date.now()}.png`
        await uploadBytes(ref(storage, path), blob)

        await setDoc(userDoc, {
            uid: user.uid,
            email: user.email,
            name: 'edit name',
            img: `${await getDownloadURL(ref(storage, path))}`,
            value: true,
        })
    } catch (e) {
        console.log(e.message)
    }
}
export const signInThunk = (userCredential) => async (dispatch, getState) => {
    try {
        const { user } = await signInWithEmailAndPassword(
            auth,
            userCredential.email,
            userCredential.password
        )
    } catch (e) {
        console.log(e.message)
    }
}
