import { connect } from 'react-redux';
import { toggleTodo } from '../../store/actions/actions'
import TodoList from '../pure/TodoList';


/**
 * NO NECESITAMOS DEVOLVER UN COMPONENTE COMO TAL, SOLO LO NECESITAMOS PARA CONECTAR 
 * SINO QUE LO EXPORTAREMOS COMO UN PROVEEDOR DE CONTEXTO Y DE CONEXION (VER MÁS ABAJO)
 */

// export const TodoContainer = (props) => {
//   return (
//     <div>TodoContainer</div>
//   )
// }


// Filter TODO LIST
const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos; 
        case 'SHOW_ACTIVE':
            return todos.filter((todo) => !todo.completed);  
        case 'SHOW_COMPLETED':
            return todos.filter((todo) => todo.completed);  
        default:
            return todos;
    }
}

const mapStateToProps = (state) => {
    return {
        todos: filterTodos(state.todosState, state.filterState)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id))
        }
    }
}

/**
 * AQUÍ LO QUE HACEMOS ES CONECTAR STATE & DISPATCH A TODOLIST
 */
const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodosContainer;