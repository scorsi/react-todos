import {combineReducers} from 'redux';

import todoReducer, * as todoMethod from './TodosReducer';

export default combineReducers({
    todos: todoReducer
});

const getVisibleTodos = ({todos}, filter) => todoMethod.getVisibleTodos(todos, filter);

export {getVisibleTodos};