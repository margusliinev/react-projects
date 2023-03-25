import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CoinsPage, ExchangesPage, PortfolioPage, SingleCoinPage, ErrorPage } from './pages';
import { Navbar, Sidebar, Footer } from './components';

function App() {
    return (
        <Router>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path='/' element={<CoinsPage />} />
                <Route path='/:id' element={<SingleCoinPage />} />
                <Route path='exchanges' element={<ExchangesPage />} />
                <Route path='portfolio' element={<PortfolioPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
