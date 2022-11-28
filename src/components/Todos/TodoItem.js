import style from './todoitem.module.scss'
import {useDispatch} from "react-redux";
import {removeTodo, setCompleted} from "../../app/features/todoReducer";
import {completeTodoThunk, deleteTodoThunk} from "../../app/features/thunks";

const TodoItem = ({index, todo}) => {
    const dispatch = useDispatch()

    const handleComplete = () => {
        dispatch(completeTodoThunk({id: todo.id, completed: todo.completed}))
    }
    const handleDelete = () => {
        dispatch(deleteTodoThunk(todo.id))
        // dispatch(removeTodo(todo.id))
    }
    return <div className={style.todoItem}>
        <span>{index + 1}</span>
        <span style={todo.completed ? {textDecoration: 'line-through'} : {}}>{todo.title}</span>
        <input type={"checkbox"} checked={todo.completed} onChange={handleComplete}/>
        <button onClick={handleDelete}>X</button>
    </div>

}


export default TodoItem