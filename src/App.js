import Messenger from './components/Messanger/Messanger'
import Menu from './components/Menu/Menu'
import {
    BrowserRouter,
    NavLink,
    Route,
    Routes,
    useMatch,
} from 'react-router-dom'
import Profile from './components/Pages/Profile'
import About from './components/Pages/About'
import Main from './components/Pages/Main'
import PageNotFound from './components/Pages/PageNotFound'
import Todos from './components/Pages/Todos'
import Auth from './components/Auth/Auth'
import { getAuth, signOut } from 'firebase/auth'
import { app } from './firebase'
import { useSelector } from 'react-redux'

const auth = getAuth(app)

function App() {
    const isAuth = useSelector((state) => state.auth.isAuth)
    return (
        <BrowserRouter>
            <Auth />
            <div className="header">
                <div className="wrap header-wrap">
                    <div className="logo">
                        <img className={'logo'} src="/img/senders.svg" alt="" />
                    </div>
                    <Menu />
                    {isAuth ? (
                        <button
                            className={'logout'}
                            onClick={() => signOut(auth)}
                        >
                            Выход
                        </button>
                    ) : (
                        <NavLink className={'login'} to={'/messanger'}>
                            Вход
                        </NavLink>
                    )}
                </div>
            </div>
            <div className="content wrap">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/messanger/*" element={<Messenger />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/todo" element={<Todos />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
