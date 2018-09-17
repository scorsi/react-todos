import {v4} from 'node-uuid';
import {getIsFetching} from "../reducers";

import * as api from '../api';

const addTodo = (text) => dispatch => {
    dispatch({
        type: 'ADD_TODO',
        id: v4(),
        text
    });
};

const toggleTodo = (id) => dispatch => {
    dispatch({
        type: 'TOGGLE_TODO',
        id
    });
};

const requestTodos = (filter) => dispatch => {
    dispatch({
        type: 'REQUEST_TODOS',
        filter
    })
};

const receiveTodos = (filter, todos) => dispatch => {
    dispatch({
        type: 'RECEIVE_TODOS',
        filter,
        todos
    });
};

const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) return Promise.resolve();

    dispatch(requestTodos(filter));
    return api.fetchTodos(filter).then(todos =>
        dispatch(receiveTodos(filter, todos))
    );
};

export {toggleTodo, addTodo, fetchTodos}