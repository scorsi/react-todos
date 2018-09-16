let nextTodoId = 0;
export default (text) => dispatch => {
    dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    });
};