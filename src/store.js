import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';

const persistedState = {
    todos: [{
        id: 0,
        text: 'Welcome back!',
        completed: false
    }],
    visibilityFilter: undefined
};

export default function configureStore(initialState = persistedState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}