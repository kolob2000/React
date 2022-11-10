import styles from './messanger.module.scss'
import './Chatboard/Chatboard'
import Chatboard from "./Chatboard/Chatboard";
import Messageboard from "./Messageboard/Messageboard";
import {Route, Routes} from "react-router-dom";
import {useContext} from "react";


export default () => {



    return <div className={styles.messenger}>
        <Routes>

            <Route path='/' element={<><Chatboard/><PickUpChat/></>}/>
            <Route path=':chatID' element={<><Chatboard/><Messageboard/></>}/>

        </Routes>


    </div>
}

const PickUpChat = () => {
    return <div style={{justifyContent: 'center', paddingTop: '20px'}} className={'layout'}>
        <h1>Выберите чат...</h1>
    </div>
}
