import Messenger from './components/Messanger/Messanger'
import Menu from './components/Menu/Menu'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from './components/Pages/Profile'
import About from './components/Pages/About'
import Main from './components/Pages/Main'
import PageNotFound from './components/Pages/PageNotFound'
import { CurrentUserIdContext, ChatListContext } from './Context'
import store from './app/index'
import Todos from './components/Pages/Todos'
import Auth from './components/Auth/Auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from './firebase'

function App() {
    const auth = getAuth(app)
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user.emailVerified)
        } else {
            // User is signed out
            // ...
        }
    })
    return (
        <BrowserRouter>
            <ChatListContext>
                <CurrentUserIdContext.Provider value={1}>
                    <Auth />
                    <div className="header">
                        <div className="wrap header-wrap">
                            <div className="logo">
                                <img
                                    className={'logo'}
                                    src="/img/senders.svg"
                                    alt=""
                                />
                            </div>
                            <Menu />
                            <div className="profile">profile</div>
                        </div>
                    </div>
                    <div className="content wrap">
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route
                                path="/messanger/*"
                                element={<Messenger />}
                            />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/todo" element={<Todos />} />
                            <Route path="*" element={<PageNotFound />} />
                        </Routes>
                    </div>
                </CurrentUserIdContext.Provider>
            </ChatListContext>
        </BrowserRouter>
    )
}

export default App
