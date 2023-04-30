import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain='dev-2bxien4g3tedoyj4.us.auth0.com'
        clientId='0NNCB57tKGNGb5YxRZsKOmrYF0auJw6D'
        authorizationParams={{
            redirect_uri: window.location.origin,
        }}
    >
        <Provider store={store}>
            <App />
        </Provider>
    </Auth0Provider>
);
