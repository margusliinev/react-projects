import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage, PortfolioPage, CoinsPage, SingleCoinPage, ErrorPage } from './pages';
import { Navbar, Footer } from './components';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='about' element={<AboutPage />} />
                <Route path='portfolio' element={<PortfolioPage />} />
                <Route path='coins' element={<CoinsPage />} />
                <Route path='coins/:id' element={<SingleCoinPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
