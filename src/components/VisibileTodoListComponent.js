import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import TodoList from './TodoListComponent';
import * as actions from '../actions';
import {getVisibleTodos, getIsFetching} from '../reducers';

class VisibileTodoListComponent extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter)
            this.fetchData();
    }

    fetchData = () => {
        const {filter, fetchTodos} = this.props;
        fetchTodos(filter);
    };

    render() {
        const {toggleTodo, todos, isFetching} = this.props;
        if (isFetching && !todos.length) return(
            <p>
                Loading...
            </p>
        );
        return (
            <TodoList
                todos={todos}
                onTodoClick={toggleTodo}
            />
        );
    }
}

VisibileTodoListComponent = withRouter(connect(
    (state, {location}) => {
        const param = location.pathname.split('/')[1];
        const filter = param === null || param === '' ? 'all' : param;
        return {
            filter,
            isFetching: getIsFetching(state, filter),
            todos: getVisibleTodos(state, filter)
        }
    },
    actions
)(VisibileTodoListComponent));

export default VisibileTodoListComponent;