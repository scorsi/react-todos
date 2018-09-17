import {combineReducers} from 'redux';

const createList = (filter) => {
    const ids = (state = [], action) => {
        switch (action.type) {
            case 'FETCH_TODOS_SUCCESS':
                return filter === action.filter
                    ? action.response.result
                    : state;
            case 'ADD_TODO_SUCCESS':
                return filter !== 'completed'
                    ? [...state, action.response.result]
                    : state;
            case 'TOGGLE_TODO_SUCCESS':
                const {result: toggledId, entities} = action.response;
                const {completed} = entities.todos[toggledId];
                return ((completed && filter === 'active') || (!completed && filter === 'completed'))
                    ? state.filter(id => id !== toggledId)
                    : state;
            default:
                return state;
        }
    };
    const isFetching = (state = false, action) => {
        if (action.filter !== filter) return state;
        switch (action.type) {
            case 'FETCH_TODOS_REQUEST':
                return true;
            case 'FETCH_TODOS_SUCCESS':
            case 'FETCH_TODOS_FAILURE':
                return false;
            default:
                return state;
        }
    };
    const errorMessage = (state = null, action) => {
        if (action.filter !== filter) return state;
        switch (action.type) {
            case 'FETCH_TODOS_REQUEST':
            case 'FETCH_TODOS_SUCCESS':
                return null;
            case 'FETCH_TODOS_FAILURE':
                return action.message;
            default:
                return state;
        }
    };
    return combineReducers({ids, isFetching, errorMessage});
};

const getIds = (state) => state.ids;

const getIsFetching = (state) => state.isFetching;

const getErrorMessage = (state) => state.errorMessage;

export default createList;
export {getIds, getIsFetching, getErrorMessage};