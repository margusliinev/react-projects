import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Error from './pages/Error';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='login' element={<Login />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
