import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './store';

import './index.css';
import App from './components/AppComponent';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <Provider store={configureStore()}>
            <App/>
        </Provider>,
        div);
    ReactDOM.unmountComponentAtNode(div);
});
