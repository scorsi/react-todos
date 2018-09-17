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

const fetchTodos = (filter) => delay(5000).then(() => {
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

export {fetchTodos};