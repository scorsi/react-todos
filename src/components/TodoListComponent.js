import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import Todo from './TodoComponent';

const styles = theme => ({
    root: {
        marginTop: 20,
        marginBottom: 20,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    }
});

export default withStyles(styles)(class TodoListComponent extends Component {
    render() {
        return (
            <List className={this.props.classes.root}>
                {this.props.todos.map((todo, i, arr) => <div key={todo.id}>
                        <ListItem
                            button
                            onClick={() => this.props.onTodoClick(todo.id)}
                        >
                            <Todo
                                {...todo}
                            />
                        </ListItem>
                        {(() => {
                            if (arr.length - 1 > i) return <Divider/>;
                            else return null;
                        })()}
                    </div>
                )}
            </List>
        );
    }
});