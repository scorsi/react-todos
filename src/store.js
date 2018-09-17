import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise';

import rootReducer from './reducers/index';

const configureStore = () => {
    const store = createStore(
        rootReducer,
        {},
        applyMiddleware(thunk, promiseMiddleware, logger)
    );

    // store.subscribe(throttle(() => {
    //     saveState({
    //         todos: store.getState().todos
    //     });
    // }, 1000));

    return store;
};

export default configureStore;