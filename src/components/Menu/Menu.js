import styles from './menu.module.scss'
import { NavLink } from 'react-router-dom'
const Menu = () => {
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

export default Menu
