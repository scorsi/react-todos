import React, {Component} from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';

import {addTodo} from '../actions';

export default connect()(class AddTodo extends Component {
    state = {
        value: '',
        disabled: true
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
            disabled: event.target.value === ''
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.value !== '') {
            this.props.dispatch(addTodo(this.state.value));
            this.setState({
                value: '',
                disabled: true
            });
        }
    };

    render() {
        return (
            <Grid container spacing={32}>
                <Grid item xs={10}>
                    <Input fullWidth value={this.state.value} onChange={this.handleChange}/>
                </Grid>
                <Grid item xs={2}>
                    <Button fullWidth variant="contained" color="primary" disabled={this.state.disabled}
                            onClick={this.handleSubmit}>
                        Add Todo
                    </Button>
                </Grid>
            </Grid>
        );
    }
});