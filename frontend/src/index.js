import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import jwt_decode from 'jwt-decode';
import * as APIUtil from './util/session_api_util';


//Compontents
import configureStore from './store/store';
// import App from './App';
import Root from './root'
import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', ()=> {
    let store = configureStore();
    if (localStorage.jwtToken) {
        APIUtil.setAuthToken(localStorage.jwtToken);
        const decoded = jwt_decode(localStorage.jwtToken)
        store.dispatch(APIUtil.setCurrentUser(decoded));
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            store.dispatch(APIUtil.logoutUser());
            window.location.href = '/login'
        }
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    serviceWorker.register();
})


// not sure what this is for we need to ask question.
// breaks on Root because we are not passing a store when we use Provider gets mad
// App gets mad because you can't use switch/route without using Provider or some such
// ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
