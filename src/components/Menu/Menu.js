import styles from './menu.module.scss'
import {NavLink} from "react-router-dom";

export default () => {
    return <>
        <ul className={styles.menu}>
            <li><NavLink to='/'>Главная</NavLink></li>
            <li><NavLink to='/messanger'>Чат</NavLink></li>
            <li><NavLink to='/profile'>Профиль</NavLink></li>
            <li><NavLink to='/about'>О нас</NavLink></li>

        </ul>
    </>
}
