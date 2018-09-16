import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

import setVisibilityFilter from '../actions/SetVisibilityFilterAction';

const Link = (
    {
        active,
        children,
        onClick
    }
) => (
    <Button
        size={"small"}
        disabled={active}
        onClick={e => {
            e.preventDefault();
            onClick();
        }}
    >
        {children}
    </Button>
);

const mapStateToLinkProps = (
    state,
    ownProps
) => {
    return {
        active:
            ownProps.filter ===
            state.visibilityFilter
    };
};
const mapDispatchToLinkProps = (
    dispatch,
    ownProps
) => {
    return {
        onClick: () => {
            dispatch(
                setVisibilityFilter(ownProps.filter)
            );
        }
    };
};
export default connect(
    mapStateToLinkProps,
    mapDispatchToLinkProps
)(Link);