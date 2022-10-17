import './scss/main.scss'
import './components/Message'
import Message from "./components/Message";

function App() {
    return (
        <div>
            <Message text={'Any message from props!'}/>
        </div>
    );
}

export default App;
