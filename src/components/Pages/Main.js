import style from './main.module.scss'
import { NavLink } from 'react-router-dom'

export default () => {
    return (
        <div className={'layout'}>
            <div className={style.main}>
                <img
                    className={style.main_logo}
                    src="/img/senders_main.svg"
                    alt=""
                />
                <h1 className={style.main_heading}>
                    Построим наши мечты вместе
                </h1>
                <p className={style.main_text}>
                    Probabo, inquit, sic agam, ut summum malum et, quantum
                    possit, a sapiente delectus. At magnum periculum adiit in
                    quo minus id, quod maxime placeat, facere nondum.
                </p>
                <NavLink className={style.main_link} to={'/messanger'}>
                    Поехали
                </NavLink>
            </div>
        </div>
    )
}
