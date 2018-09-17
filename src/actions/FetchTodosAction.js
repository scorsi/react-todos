import * as api from '../api';

const receiveTodos = (filter, todos) => dispatch => {
    dispatch({
        type: 'RECEIVE_TODOS',
        filter,
        todos
    });
};

const fetchTodos = (filter) => api.fetchTodos(filter).then(todos => receiveTodos(filter, todos));

export default fetchTodos;