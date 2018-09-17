const toggleTodo = (id) => dispatch => {
    dispatch({
        type: 'TOGGLE_TODO',
        id
    });
};

export default toggleTodo;