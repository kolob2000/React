import styles from './messanger.module.scss'
import './Chatboard/Chatboard'
import Chatboard from "./Chatboard/Chatboard";
import Messageboard from "./Messageboard/Messageboard";

export default () => {
    return <div className={styles.messenger}>
        <Chatboard/>
        <Messageboard/>
    </div>
}
