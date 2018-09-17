import {combineReducers} from 'redux';

import byId, * as fromById from './todo/byId';
import createList, * as fromList from './todo/createList';

const todos = combineReducers({
    byId,
    listByFilter: combineReducers({
        all: createList('all'),
        active: createList('active'),
        completed: createList('completed')
    })
});

const getVisibleTodos = (state, filter) => {
    const ids = fromList.getIds(state.listByFilter[filter]);
    return ids.map(id => fromById.getTodo(state.byId, id));
};
const getIsFetching = (state, filter) =>
    fromList.getIsFetching(state.listByFilter[filter]);

export default todos;
export {getVisibleTodos, getIsFetching};