import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Route } from 'react-router-dom';
import decode from 'jwt-decode';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//root reducer
import { rootReducer } from './Redux/reducers/rootReducer.js';
//actions
import { registerDispatch } from './Redux/actions/users';

//css
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if (localStorage.user) {
    const user = decode(localStorage.user);
    const data = {
        email: user.email,
        id: user.id
    };
    store.dispatch(registerDispatch(data))
}

ReactDOM.render(

    <BrowserRouter>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </BrowserRouter>,

    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
