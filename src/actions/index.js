import {normalize} from 'normalizr';

import {getIsFetching} from "../reducers";
import * as api from '../api';
import * as schema from '../api/schema';

const fetchTodos = (filter) => (dispatch, getState) => {
    if (getIsFetching(getState(), filter)) return Promise.resolve();

    dispatch({
        type: 'FETCH_TODOS_REQUEST',
        filter
    });
    return api.fetchTodos(filter).then(
        response =>
            dispatch({
                type: 'FETCH_TODOS_SUCCESS',
                filter,
                response: normalize(response, schema.todoListSchema)
            }),
        error => dispatch({
            type: 'FETCH_TODOS_FAILURE',
            filter,
            message: error.message || 'Something went wrong!'
        })
    );
};

const addTodo = (text) => dispatch => {
    api.addTodo(text).then(
        response =>
            dispatch({
                type: 'ADD_TODO_SUCCESS',
                response: normalize(response, schema.todoSchema)
            })
    );
};

const toggleTodo = (id) => dispatch => {
    api.toggleTodo(id).then(
        response =>
            dispatch({
                type: 'TOGGLE_TODO_SUCCESS',
                response: normalize(response, schema.todoSchema)
            })
    );
};

export {toggleTodo, addTodo, fetchTodos}