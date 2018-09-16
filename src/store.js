import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/RootReducer';

const persitedState = {
    todos: [{
        id: 0,
        text: 'Welcome back!',
        completed: false
    }]
};

export default function configureStore(initialState = persitedState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}