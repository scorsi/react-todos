import {v4} from 'node-uuid';

const fakeDatabase = {
    todos: [{
        id: v4(),
        text: 'My first todo',
        completed: true
    }, {
        id: v4(),
        text: 'My second todo',
        completed: false,
    }, {
        id: v4(),
        text: 'Humm.. Again ?',
        completed: true
    }]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const fetchTodos = (filter) => delay(500).then(() => {
    if (Math.random() > 0.8) throw new Error('Can\' connect to the api');
    switch (filter) {
        case 'all':
            return fakeDatabase.todos;
        case 'active':
            return fakeDatabase.todos.filter(t => !t.completed);
        case 'completed':
            return fakeDatabase.todos.filter(t => t.completed);
        default:
            throw new Error(`Unknown filter: ${filter}`)
    }
});

const addTodo = (text) => delay(500).then(() => {
    const todo = {
        id: v4(),
        text,
        completed: false
    };
    fakeDatabase.todos.push(todo);
    return todo;
});

const toggleTodo = (id) => delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
});

export {fetchTodos, addTodo, toggleTodo};