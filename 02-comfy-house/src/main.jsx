import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SidebarProvider } from './context/SidebarContext';
import { ProductsProvider } from './context/ProductsContext';
import { FilterProvider } from './context/FilterContext';
import './main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <SidebarProvider>
        <ProductsProvider>
            <FilterProvider>
                <App />
            </FilterProvider>
        </ProductsProvider>
    </SidebarProvider>
);
