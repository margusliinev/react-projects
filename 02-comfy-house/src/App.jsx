import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer } from './components';
import { AboutPage, CartPage, ErrorPage, HomePage, ProductsPage, SingleProductPage } from './pages';

function App() {
    return (
        <Router>
            <Navbar />
            <Sidebar />
            <Routes>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='about' element={<AboutPage />}></Route>
                <Route path='cart' element={<CartPage />}></Route>
                <Route path='products' element={<ProductsPage />}></Route>
                <Route path='products/:id' element={<SingleProductPage />}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
