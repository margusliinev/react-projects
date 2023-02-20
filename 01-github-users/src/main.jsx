import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GithubProvider } from './context/context';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <GithubProvider>
        <App />
    </GithubProvider>
);
