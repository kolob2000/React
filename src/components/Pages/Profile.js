import {useDispatch, useSelector} from "react-redux";
import {changeCheckBox} from "../../app/profilerReducer";
import style from './profile.module.scss'

export default () => {
    const dispatch = useDispatch()
    const profiler = useSelector(state => state.profiler)
    console.log(profiler)
    return <div className={'layout ' + style.wrap}>
        <h1>Мой профиль</h1>
        <img src={profiler.img} alt="" className={style['profile-photo']}/>
        <h3 className={style['text-name']}>Мария Иванова</h3>
        <p className={style['email']}>mail@mail.ru</p>
        <input type="checkbox" checked={profiler.value} onChange={e => dispatch(changeCheckBox())}/>
        <h3 className={style['about-heading']}>Немножко обо мне</h3>
        <p className={style.about}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aliquam architecto, corporis distinctio, dolorum eaque illo iste laudantium libero modi necessitatibus nemo nostrum omnis, quibusdam. Accusantium adipisci amet architecto atque aut consequatur consequuntur culpa delectus dolor eius est illum incidunt ipsum itaque labore laborum nobis nulla, officia officiis quaerat quidem quod saepe sapiente similique tempore tenetur vel. Alias beatae deserunt dignissimos earum eos esse, iste labore laudantium natus omnis, pariatur perferendis praesentium quidem sit sunt tenetur velit. Accusamus dicta doloribus nostrum recusandae! Ab adipisci, consequuntur corporis dicta, doloremque earum exercitationem, illo iure laudantium mollitia natus possimus quaerat sit unde?
        </p>
    </div>
}
