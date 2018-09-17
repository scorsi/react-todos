import {schema} from 'normalizr';

const todoSchema = new schema.Entity('todos');
const todoListSchema = new schema.Array(todoSchema);

export {todoSchema, todoListSchema};