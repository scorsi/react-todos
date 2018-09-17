import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import TodoList from './TodoListComponent';
import FetchError from './FetchErrorComponent';
import * as actions from '../actions';
import {getVisibleTodos, getIsFetching, getErrorMessage} from '../reducers';

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
        const {toggleTodo, errorMessage, todos, isFetching} = this.props;
        if (isFetching && !todos.length) return(
            <p>
                Loading...
            </p>
        );
        if (errorMessage) return (
            <FetchError
                message={errorMessage}
                onRetry={this.fetchData}
            />
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
            errorMessage: getErrorMessage(state, filter),
            isFetching: getIsFetching(state, filter),
            todos: getVisibleTodos(state, filter)
        }
    },
    actions
)(VisibileTodoListComponent));

export default VisibileTodoListComponent;