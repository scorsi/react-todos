import {v4} from 'node-uuid';

const addTodo = (text) => dispatch => {
    dispatch({
        type: 'ADD_TODO',
        id: v4(),
        text
    });
};

export default addTodo;