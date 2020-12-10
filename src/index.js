import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom";

import App from "./componets/app";
import ErrorBoundry from "./componets/error-boundry";
import DataStoreService from "./services/DataStore-service";
import { DataServiceProvider } from "./componets/data-service-context";

import store from "./store";

const dataStoreService = new DataStoreService();


ReactDOM.render(
    <Provider store={store} >
        <ErrorBoundry>
            <DataServiceProvider value={dataStoreService}>
                <Router>
                    <App/>
                </Router>
            </DataServiceProvider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));



