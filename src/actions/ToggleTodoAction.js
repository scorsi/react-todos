export default (id) => dispatch => {
    dispatch({
        type: 'TOGGLE_TODO',
        id
    });
};