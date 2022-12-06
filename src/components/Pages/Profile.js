import { useDispatch } from 'react-redux'
import {
    changeName,
    editName,
} from '../../app/features/Profiler/profilerReducer'
import style from './profile.module.scss'
import { useProfilerSelector } from '../../app/features/Profiler/profilerSelectors'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
    changeNameWithFirebase,
    editNameWithFirebase,
} from '../../app/features/Profiler/middleware/middleware'

export default () => {
    const dispatch = useDispatch()
    const profiler = useProfilerSelector()
    const inputNameRef = useRef(null)
    const [name, setName] = useState('')
    const handleEditName = useCallback(async () => {
        // dispatch(editName())
        await editNameWithFirebase(profiler.uid)
    })
    const handleSaveName = useCallback(async () => {
        // dispatch(changeName(name))
        await changeNameWithFirebase(profiler.uid, name)
        setName('')
    }, [dispatch, name])
    const handleOnPressEnter = async (e) => {
        if (e.key === 'Enter') await handleSaveName()
    }
    useEffect(() => inputNameRef.current?.focus(), [profiler.value])

    return (
        <div className={'layout ' + style.wrap}>
            <h1>Мой профиль</h1>
            <img src={profiler.img} alt="" className={style['profile-photo']} />
            <div className={style['name-area']}>
                {profiler.value ? (
                    <>
                        <h3 className={style['text-name']}>{profiler.name}</h3>
                        <button
                            className={style['edit-name__button']}
                            onClick={handleEditName}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="12"
                                height="12"
                                viewBox="0 0 20 20"
                                fill=""
                            >
                                <path
                                    d="M16.4727 8.60547L16.0312 9.04688L15.1484 9.92969L7.14062 17.9375C6.88281 18.1953 6.5625 18.3867 6.21094 18.4883L1.20312 19.9609C0.874998 20.0586 0.519529 19.9688 0.277342 19.7227C0.0351541 19.4766 -0.0585959 19.1289 0.0390604 18.7969L1.51172 13.793C1.61328 13.4414 1.80469 13.1211 2.0625 12.8633L10.0703 4.85547L10.9531 3.97266L11.3945 3.53125L12.7187 4.85547L15.1445 7.28125L16.4687 8.60547H16.4727ZM3.75 13.8242L3.38672 14.1875C3.35156 14.2227 3.32422 14.2695 3.30859 14.3203L2.32031 17.6797L5.67969 16.6914C5.73047 16.6758 5.77734 16.6484 5.8125 16.6133L6.17578 16.25H4.375C4.03125 16.25 3.75 15.9688 3.75 15.625V13.8242ZM17.707 0.753906L19.2461 2.29297C20.2227 3.26953 20.2227 4.85156 19.2461 5.82812L18.6797 6.39453L17.7969 7.27734L17.3555 7.71875L16.0312 6.39453L13.6055 3.96875L12.2773 2.64453L12.7187 2.20312L13.6016 1.32031L14.168 0.753906C15.1445 -0.222656 16.7266 -0.222656 17.7031 0.753906H17.707Z"
                                    fill=""
                                />
                            </svg>
                        </button>
                    </>
                ) : (
                    <>
                        <input
                            ref={inputNameRef}
                            type="text"
                            className={style['edit-name__input']}
                            placeholder={'Введите имя...'}
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            onKeyDown={handleOnPressEnter}
                        />
                        <button
                            className={style['save-name__button']}
                            onClick={handleSaveName}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="12"
                                viewBox="0 0 18 14"
                                fill=""
                            >
                                <path
                                    d="M17.3828 1.11719C17.8711 1.60547 17.8711 2.39844 17.3828 2.88672L7.38281 12.8867C6.89453 13.375 6.10156 13.375 5.61328 12.8867L0.613281 7.88672C0.125 7.39844 0.125 6.60547 0.613281 6.11719C1.10156 5.62891 1.89453 5.62891 2.38281 6.11719L6.5 10.2305L15.6172 1.11719C16.1055 0.628906 16.8984 0.628906 17.3867 1.11719H17.3828Z"
                                    fill=""
                                />
                            </svg>
                        </button>
                    </>
                )}
            </div>
            <p className={style['email']}>{profiler.email}</p>
            <h3 className={style['about-heading']}>Немножко обо мне</h3>
            <p className={style.about}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                accusantium aliquam architecto, corporis distinctio, dolorum
                eaque illo iste laudantium libero modi necessitatibus nemo
                nostrum omnis, quibusdam. Accusantium adipisci amet architecto
                atque aut consequatur consequuntur culpa delectus dolor eius est
                illum incidunt ipsum itaque labore laborum nobis nulla, officia
                officiis quaerat quidem quod saepe sapiente similique tempore
                tenetur vel. Alias beatae deserunt dignissimos earum eos esse,
                iste labore laudantium natus omnis, pariatur perferendis
                praesentium quidem sit sunt tenetur velit. Accusamus dicta
                doloribus nostrum recusandae! Ab adipisci, consequuntur corporis
                dicta, doloremque earum exercitationem, illo iure laudantium
                mollitia natus possimus quaerat sit unde?
            </p>
        </div>
    )
}
