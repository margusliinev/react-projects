import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, PricingPage, CoinsPage, SingleCoinPage, ErrorPage } from './pages';
import { Navbar, Sidebar, Footer } from './components';

function App() {
    return (
        <Router>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='pricing' element={<PricingPage />} />
                <Route path='coins' element={<CoinsPage />} />
                <Route path='coins/:id' element={<SingleCoinPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
