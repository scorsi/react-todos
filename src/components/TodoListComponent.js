import React from 'react';

import Todo from './TodoComponent';

export default (
    {
        todos,
        onTodoClick
    }
) => (
    <ul>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        )}
    </ul>
);