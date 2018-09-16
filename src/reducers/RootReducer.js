import {combineReducers} from 'redux';
import todoReducer from './TodoReducer';
import visibilityFilterReducer from './VisibilityFilterReducer';

export default combineReducers({
    todos: todoReducer,
    visibilityFilter: visibilityFilterReducer
});