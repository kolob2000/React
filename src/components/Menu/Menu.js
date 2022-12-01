import styles from './menu.module.scss'
import { NavLink } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase'

export default () => {
    ;(async function () {
        try {
            const docRef = await addDoc(collection(db, 'users'), {
                first: 'Ada',
                last: 'Lovelace',
                born: 1815,
            })
            console.log('Document written with ID: ', docRef.id)
        } catch (e) {
            console.error('Error adding document: ', e)
        }
    })()
    return (
        <>
            <ul className={styles.menu}>
                <li>
                    <NavLink to="/">Главная</NavLink>
                </li>
                <li>
                    <NavLink to="/messanger">Чат</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Профиль</NavLink>
                </li>
                <li>
                    <NavLink to="/about">О нас</NavLink>
                </li>
                <li>
                    <NavLink to="/todo">Задачи</NavLink>
                </li>
            </ul>
        </>
    )
}
