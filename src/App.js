import React, {Component} from 'react';

import AddTodo from './components/AddTodoComponent';
import VisibleTodoList from './components/VisibileTodoListComponent';
import Footer from './components/FooterComponent';

export default class App extends Component {
    render() {
        return (
            <div>
                <AddTodo />
                <VisibleTodoList />
                <Footer />
            </div>
        );
    }
}