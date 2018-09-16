import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import AddTodo from './components/AddTodoComponent';
import VisibleTodoList from './components/VisibileTodoListComponent';
import Footer from './components/FooterComponent';

const styles = () => ({
    root: {
        flexGrow: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 600,
        padding: 20,
    }
});

export default withStyles(styles())(class App extends Component {
    render() {
        return (
            <Paper className={this.props.classes.root}>
                <AddTodo/>
                <VisibleTodoList/>
                <Footer/>
            </Paper>
        );
    }
});