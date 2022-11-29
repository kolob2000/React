import { Dialog } from '@mui/material'
import React, { useRef, useState } from 'react'
import style from './auth.module.scss'
import { useDispatch } from 'react-redux'
import { fetchLoginThunk, fetchRegThunk } from '../../app/features/Auth/thunks'

const Auth = () => {
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

    return (
        <>
            <Dialog open={true}>
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
                            onKeyDown={(e) => handleKeyDown(e, 'signin')}
                        />
                        <button onClick={hidePassword}>
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
                        <button id={'cancel'} type={'submit'} name={'signup'}>
                            Регистрация
                        </button>
                    </div>
                </form>
            </Dialog>
        </>
    )
}

export default React.memo(Auth)
