import { Dialog } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import style from './auth.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLoginThunk, fetchRegThunk } from '../../app/features/Auth/thunks'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { setAuth } from '../../app/features/Auth/authReducer'
import { useLocation } from 'react-router-dom'

const Auth = () => {
    const auth = getAuth()
    const isEmailVerified = useSelector((state) => state.auth.emailVerified)
    const isAuth = useSelector((state) => state.auth.isAuth)
    const passwordRef = useRef(null)
    const [hide, setHide] = useState(true)
    const [input, setInput] = useState({ email: '', password: '' })
    const hidePassword = (e) => {
        e.preventDefault()
        setHide((prev) => !prev)
        if (passwordRef.current?.type === 'password') {
            passwordRef.current.type = 'text'
        } else {
            passwordRef.current.type = 'password'
        }
    }
    const handleInput = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const dispatch = useDispatch()
    const handleKeyDown = (e, name) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleSubmit(e, name)
        }
    }
    const handleSubmit = (e = null, name = null) => {
        e.preventDefault()
        name = name ?? e.nativeEvent?.submitter.name
        const { email, password } = input
        if (name === 'signin') {
            console.log('signin')
            dispatch(fetchLoginThunk({ email, password }))
        } else if (name === 'signup') {
            console.log('signup')
            dispatch(fetchRegThunk({ email, password }))
        }
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { email, uid, emailVerified } = user
                const userData = { email, uid, emailVerified, isAuth: true }
                dispatch(setAuth(userData))
            } else {
                const userData = {
                    email: null,
                    uid: null,
                    emailVerified: null,
                    isAuth: null,
                }
                dispatch(setAuth(userData))
            }
        })
    }, [])
    const location = useLocation()
    console.log(location)
    return (
        <>
            {location.pathname !== '/' && (
                <Dialog
                    open={!(isAuth && isEmailVerified)}
                    className={style.dialog}
                >
                    {isAuth ? (
                        <div className={'add_chat ' + style.auth}>
                            <h1 className={style.verify_heading}>
                                Подтвердите электронную почту
                            </h1>
                            <button className={style.send_link}>
                                Отправить письмо повторно
                            </button>
                            <button
                                className={style.send_link}
                                onClick={() => signOut(auth)}
                            >
                                Выход
                            </button>
                        </div>
                    ) : (
                        <form
                            className={'add_chat ' + style.auth}
                            onSubmit={handleSubmit}
                        >
                            <h3>Вход/Регистрация</h3>
                            <div className={style.alert}>alert</div>
                            <input
                                type="email"
                                placeholder={'Электронная почта'}
                                required={true}
                                name="email"
                                value={input.email}
                                onChange={handleInput}
                                onKeyDown={(e) => handleKeyDown(e, 'signin')}
                            />
                            <div className={style.password_block}>
                                <input
                                    ref={passwordRef}
                                    className={style.password}
                                    type="password"
                                    placeholder={'Пароль'}
                                    required={true}
                                    name="password"
                                    value={input.password}
                                    onChange={handleInput}
                                    onKeyDown={(e) =>
                                        handleKeyDown(e, 'signin')
                                    }
                                />
                                <button type={'button'} onClick={hidePassword}>
                                    <i
                                        className={`fa-solid ${
                                            hide ? 'fa-eye' : 'fa-eye-slash'
                                        }`}
                                    ></i>
                                </button>
                            </div>
                            <div className="buttons">
                                <button
                                    id={'create-chat'}
                                    type={'submit'}
                                    name={'signin'}
                                >
                                    Вход
                                </button>
                                <button
                                    id={'cancel'}
                                    type={'submit'}
                                    name={'signup'}
                                >
                                    Регистрация
                                </button>
                            </div>
                        </form>
                    )}
                </Dialog>
            )}
        </>
    )
}

export default React.memo(Auth)
