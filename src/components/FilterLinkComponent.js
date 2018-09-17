import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class FilterLinkComponent extends Component {
    render() {
        return (
            <NavLink
                exact
                to={this.props.filter === 'all' ? '/' : `/${this.props.filter}`}
                activeStyle={{
                    textDecoration: 'none',
                    color: 'black'
                }}
            >
                {this.props.children}
            </NavLink>
        );
    }
}

export default FilterLinkComponent;