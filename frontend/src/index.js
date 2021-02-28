import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from './util/session_api_util';
import { logout } from './actions/session_actions';
import './css_stylesheets/application.scss';

document.addEventListener('DOMContentLoaded', () => {
    let store;



    const parks = {};
    if (localStorage.jwtToken) {
        setAuthToken(localStorage.jwtToken);
        const decodedUser = jwt_decode(localStorage.jwtToken);
        const preloadedState = { 
            entities: { users: decodedUser, parks},
            session: { isAuthenticated: true, user: decodedUser },
             
        };

        store = configureStore(preloadedState);

        const currentTime = Date.now() / 1000;

        if (decodedUser.exp < currentTime) {
            store.dispatch(logout());
            window.location.href = '/';
        }
    } else {
        store = configureStore({entities: { parks }});
    }


    window.getState = store.getState;
    window.dispatch = store.dispatch;
  
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);

});