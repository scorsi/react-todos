import React from 'react';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';

import App from "./AppComponent";

const RootComponent = (
    {
        store
    }
) => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path={'/(:filter)?'} component={App}/>
        </BrowserRouter>
    </Provider>
);

export default RootComponent;