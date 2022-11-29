import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { app } from '../../../firebase'

const auth = getAuth(app)
export const fetchRegThunk = createAsyncThunk(
    'auth/fetchRegThunk',
    async (credentials, thunkAPI) => {
        try {
            const userCredentials = await createUserWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password
            )
            await sendEmailVerification(auth.currentUser)
            const { email, uid } = userCredentials.user
            return { email, uid }
        } catch (e) {
            console.log(e.message)
            console.dir(e)
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const fetchLoginThunk = createAsyncThunk(
    'auth/fetchLoginThunk',
    async (credentials, thunkAPI) => {
        try {
            const userCredentials = await signInWithEmailAndPassword(
                auth,
                credentials.email,
                credentials.password
            )
            const { email, uid } = userCredentials.user
            return { email, uid }
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)
