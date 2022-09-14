import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ submit }) => {

    const newText = useRef();

    return (
        <div>
            <h2>Create your To Do:</h2>
            <form onSubmit={ (e) => {
                e.preventDefault();
                submit(newText.current.value);
                newText.current.value = '';
            }}>

                <input type="text" placeholder='Name your todo here!' ref={ newText } />
                <button type='submit'>
                    Create
                </button>

            </form>
        </div>
    );
}

TodoForm.propTypes = {
    submit: PropTypes.func.isRequired,
}

export default TodoForm;
