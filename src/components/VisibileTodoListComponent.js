import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import TodoList from './TodoListComponent';
import toggleTodo from '../actions/ToggleTodoAction';
import {getVisibleTodos} from '../reducers';

export default withRouter(connect(
    (state, {location}) => ({
        todos: getVisibleTodos(
            state,
            location.pathname.substring(1)
        )
    }),
    {onTodoClick: toggleTodo}
)(TodoList));