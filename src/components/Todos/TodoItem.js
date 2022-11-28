import style from './todoitem.module.scss'
import {useDispatch} from "react-redux";
import {removeTodo, setCompleted} from "../../app/features/todoReducer";

const TodoItem = ({index, todo}) => {
    const dispatch = useDispatch()

    const handleComplete = () => {
        dispatch(setCompleted(todo.id))
    }
    const handleDelete = () => {
        dispatch(removeTodo(todo.id))
    }
    return <div className={style.todoItem}>
        <span>{index + 1}</span>
        <span style={todo.completed ? {textDecoration: 'line-through'} : {}}>{todo.title}</span>
        <input type={"checkbox"} checked={todo.completed} onChange={handleComplete}/>
        <button onClick={handleDelete}>X</button>
    </div>

}


export default TodoItem