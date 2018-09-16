export default (filter) => dispatch => {
    dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter
    });
};