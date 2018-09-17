import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import AddTodo from './AddTodoComponent';
import VisibleTodoList from './VisibileTodoListComponent';
import Footer from './FooterComponent';

const styles = () => ({
    root: {
        flexGrow: 1,
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: 600,
        padding: 20,
    }
});

export default withStyles(styles())(class AppComponent extends Component {
    render() {
        return (
            <Paper className={this.props.classes.root}>
                <AddTodo/>
                <VisibleTodoList />
                <Footer/>
            </Paper>
        );
    }
});