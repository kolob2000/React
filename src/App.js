import Messenger from "./components/Messanger/Messanger";
import {createContext} from "react";

export const CurrentUserIdContext = createContext()

function App() {
    return (
        <CurrentUserIdContext.Provider value={1}>
            <>
                <div className="header">
                    <div className="wrap header-wrap">
                        <div className="logo">logotype</div>
                        <div className="menu">menu</div>
                        <div className="profile">profile</div>
                    </div>
                </div>
                <div className="content wrap">
                    <div className="left_sidebar">
                        left-sidebar
                    </div>
                    <Messenger/>
                    <div className="right_sidebar">
                        right-sidebar
                    </div>

                </div>
            </>
        </CurrentUserIdContext.Provider>
    );
}

export default App;
