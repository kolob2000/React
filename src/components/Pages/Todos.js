import {memo} from "react";
import TodoList from "../Todos/TodoList";

const Todos = () => {
    return <div className={'layout'} style={{justifyContent: "flex-start", paddingTop: '30px', flexDirection: "column", alignItems: "center"}}>
        <h1 style={{marginBottom:'30px'}}>Задачи</h1>
        <TodoList/>

    </div>
}
export default memo(Todos)