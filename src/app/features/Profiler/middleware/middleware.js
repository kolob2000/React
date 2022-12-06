import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../../../firebase'
import { createProfile, editName } from '../profilerReducer'

export const onInitProfile = (uid) => (dispatch) => {
    const userDoc = doc(db, 'users', uid)
    onSnapshot(userDoc, (doc) => {
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
