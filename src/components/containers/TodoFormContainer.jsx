import { connect } from 'react-redux'
import { addTodo } from '../../store/actions/actions';
import TodoForm from '../pure/forms/TodoForm';

const mapStateToProps = (state) => {
    // No lo necesitamos porque no altera el estado
}

const mapDispatchToProps = (dispatch) =>{
    return {
        submit: ((text) => dispatch(addTodo(text))),
    }
}

const TodoFormContainer = connect(mapStateToProps, mapDispatchToProps)(TodoForm);

export default TodoFormContainer;
