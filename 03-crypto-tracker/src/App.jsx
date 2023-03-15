import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, CoinsPage, SingleCoinPage, ErrorPage } from './pages';
import { Navbar, Footer } from './components';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='about' element={<AboutPage />}></Route>
                <Route path='coins' element={<CoinsPage />}></Route>
                <Route path='coins/:id' element={<SingleCoinPage />}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
