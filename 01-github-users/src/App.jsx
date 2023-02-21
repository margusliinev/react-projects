import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='*' element={<Error />} />
            </Routes>
        </Router>
    );
}

export default App;
