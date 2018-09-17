import {v4} from 'node-uuid';

export default (text) => dispatch => {
    dispatch({
        type: 'ADD_TODO',
        id: v4(),
        text
    });
};