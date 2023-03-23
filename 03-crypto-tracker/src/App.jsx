import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, ExchangesPage, PricingPage, SingleCoinPage, ErrorPage } from './pages';
import { Navbar, Sidebar, Footer } from './components';

function App() {
    return (
        <Router>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/:id' element={<SingleCoinPage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='Exchanges' element={<ExchangesPage />} />
                <Route path='pricing' element={<PricingPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
