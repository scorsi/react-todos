import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';

import rootReducer from './reducers/index';
import {loadState, saveState} from "./localStorage";

const configureStore = () => {
    const store = createStore(
        rootReducer,
        loadState(),
        applyMiddleware(thunk, logger)
    );

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        });
    }, 1000));

    return store;
};

export default configureStore;