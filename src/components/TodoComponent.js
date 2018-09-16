import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CheckBoxOutlineBlankRounded from '@material-ui/icons/CheckBoxOutlineBlankRounded';
import CheckBoxRounded from '@material-ui/icons/CheckBoxRounded';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    icon: {
        marginRight: 10
    }
});

export default withStyles(styles)(class TodoListComponent extends Component {
    render() {
        return (
            <Typography className={this.props.classes.root}>
                {(() => {
                    if (this.props.completed)
                        return <CheckBoxRounded className={this.props.classes.icon} color={"primary"}/>;
                    return <CheckBoxOutlineBlankRounded className={this.props.classes.icon} color={"primary"}/>;
                })()}
                {this.props.text}
            </Typography>
        );
    }
});