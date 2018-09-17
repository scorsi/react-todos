const byId = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                [action.id]: {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            };
        case 'TOGGLE_TODO':
            const todo = getTodo(state, action.id);
            return {
                ...state,
                [action.id]: {
                    ...todo,
                    completed: !todo.completed
                }
            };
        case 'RECEIVE_TODOS':
            const nextState = {...state};
            action.todos.forEach(todo => {
                nextState[todo.id] = todo;
            });
            return nextState;
        default:
            return state;
    }
};

const getTodo = (state, id) => state[id];

export default byId;
export {getTodo};