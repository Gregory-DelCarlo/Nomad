import React from 'react';
import ReactGA from 'react-ga';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

const trackingId = "UA-200233490-4"
ReactGA.initialize(trackingId)
ReactGA.pageview(window.location.pathname + window.location.search)

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

export default Root;