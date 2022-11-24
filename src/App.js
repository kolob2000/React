import Messenger from "./components/Messanger/Messanger";
import Menu from "./components/Menu/Menu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Profile from "./components/Pages/Profile";
import About from "./components/Pages/About";
import Main from "./components/Pages/Main";
import PageNotFound from "./components/Pages/PageNotFound";
import {CurrentUserIdContext, ChatListContext} from "./Context";
import store from './app/index'


function App() {
    return (
        <BrowserRouter>
            <ChatListContext>
                <CurrentUserIdContext.Provider value={1}>
                    <div className="header">
                        <div className="wrap header-wrap">
                            <div className="logo">logotype</div>
                            <Menu/>
                            <div className="profile">profile</div>
                        </div>
                    </div>
                    <div className="content wrap">
                        <div className="left_sidebar">
                            left-sidebar
                        </div>
                        <Routes>
                            <Route path='/' element={<Main/>}/>
                            <Route path='/messanger/*' element={<Messenger/>}/>
                            <Route path='/profile' element={<Profile/>}/>
                            <Route path='/about' element={<About/>}/>
                            <Route path='*' element={<PageNotFound/>}/>
                        </Routes>
                        <div className="right_sidebar">
                            right-sidebar
                        </div>

                    </div>
                </CurrentUserIdContext.Provider>
            </ChatListContext>
        </BrowserRouter>
    );
}

export default App;
