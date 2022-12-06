import { createAsyncThunk } from '@reduxjs/toolkit'
import {
    getAuth,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { app } from '../../../firebase'
import { createProfile } from '../Profiler/profilerReducer'

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
            const { email, uid, emailVerified } = userCredentials.user
            thunkAPI.dispatch(createProfile({ uid, email }))
            return { email, uid, emailVerified, isAuth: true }
        } catch (e) {
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
            const { email, uid, emailVerified } = userCredentials.user
            return { email, uid, emailVerified, isAuth: true }
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)
