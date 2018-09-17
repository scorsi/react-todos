import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Root from './components/RootComponent';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';

ReactDOM.render(
    <Root store={configureStore()}/>,
    document.getElementById('root')
);
registerServiceWorker();