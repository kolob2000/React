import TodoItem from "./TodoItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTodosThunk} from "../../app/features/thunks";

const TodoList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodosThunk())
    }, [dispatch])
    const todos = useSelector(state => state.todos.todos)
    const {status, error} = useSelector(state => state.todos)


    return <>
        {status === 'pending' && <>...Загрузка</>}
        {error && <div><h1> Произошла ошибка: {error}</h1>
            <button style={{background: '#ccc', padding: '10px 10px', color: 'black', borderRadius: '5px', marginTop:'10px'}}
                    onClick={() => dispatch(fetchTodosThunk())}>Повторить
                запрос
            </button>
        </div>}
        {todos.map((todo, index) => <TodoItem key={todo.id} todo={todo} index={index}/>)}

    </>
}

export default TodoList