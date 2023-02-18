import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.scss';
import { GithubProvider } from './context/context';

ReactDOM.createRoot(document.getElementById('root')).render(
    <GithubProvider>
        <App />
    </GithubProvider>
);
