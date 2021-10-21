import TodoForm from './ToDoForm';
import TodoList from './ToDoList';
import './ToDo.css';
import { useSelector, useDispatch } from 'react-redux';
import { addToDoAction } from '../../ReduxConfig/actions/addToDo';
import { removeToDoAction } from '../../ReduxConfig/actions/removeToDo'
function Todo() {
    const toDoState = useSelector(state => state.todoReducer.todos)
    const dispatch = useDispatch();
    const buttonAdd = (task) => {
        dispatch(addToDoAction(task))
    };

    const deleteTodo = (index) => {
        dispatch(removeToDoAction(index))
    }

    return (
        <div className="text-center py-2 todo-wrapper container">
            <TodoForm addTodo={buttonAdd} />
            <TodoList todos={toDoState} deleteTodo={deleteTodo} />
        </div>
    );
}

export default Todo;