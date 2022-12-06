import { doc, setDoc, onSnapshot } from 'firebase/firestore'
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { db } from '../../../firebase'
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
        sendEmailVerification(auth.currentUser, {
            url: 'http://localhost:3000/messanger',
            handleCodeInApp: true,
        })
        await setDoc(userDoc, {
            uid: user.uid,
            email: user.email,
            name: 'edit name',
            img: '/img/profile_blue.png',
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
