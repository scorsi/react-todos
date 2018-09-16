import {connect} from 'react-redux';

import TodoList from './TodoListComponent';
import toggleTodo from '../actions/ToggleTodoAction';

const getVisibleTodos = (
    todos,
    filter
) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(
                t => t.completed
            );
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
        default:
            return todos;
    }
};

const mapStateToTodoListProps = (
    state
) => ({
    todos: getVisibleTodos(
        state.todos,
        state.visibilityFilter
    )
});
const mapDispatchToTodoListProps = (
    dispatch
) => ({
    onTodoClick: (id) => {
        dispatch(toggleTodo(id));
    }
});
export default connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
)(TodoList);