import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../utils/getLocalStorage';
import Swal from 'sweetalert2';

const initialState = {
    portfolio: getLocalStorage('portfolio'),
    sorted_portfolio: [],
    sort: 'number-low',
};

const displayMessage = (id) => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        titleText: `${id.charAt(0).toUpperCase() + id.slice(1)} was added to your portfolio`,
        showConfirmButton: false,
        timer: 1500,
        background: '#1a1a1a',
        color: '#ccc',
    });
};

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        updateSort: (state, { payload }) => {
            state.sort = payload;
        },
        sortPortfolio: (state) => {
            state.sorted_portfolio = [...state.portfolio];
            let sortedPortfolio = [...state.sorted_portfolio];
            if (state.sort === 'number-low') {
                sortedPortfolio = sortedPortfolio.sort((a, b) => a.number - b.number);
            } else if (state.sort === 'number-high') {
                sortedPortfolio = sortedPortfolio.sort((a, b) => b.number - a.number);
            } else if (state.sort === 'name-a-z') {
                sortedPortfolio = sortedPortfolio.sort((a, b) => a.name.localeCompare(b.name));
            } else if (state.sort === 'name-z-a') {
                sortedPortfolio = sortedPortfolio.sort((a, b) => b.name.localeCompare(a.name));
            } else if (state.sort === 'symbol-a-z') {
                sortedPortfolio = sortedPortfolio.sort((a, b) => a.symbol.localeCompare(b.symbol));
            } else if (state.sort === 'symbol-z-a') {
                sortedPortfolio = sortedPortfolio.sort((a, b) => b.symbol.localeCompare(a.symbol));
            } else if (state.sort === 'price-low') {
                sortedPortfolio = sortedPortfolio.sort((a, b) => b.current_price - a.current_price);
            } else if (state.sort === 'price-high') {
                sortedPortfolio = sortedPortfolio.sort((a, b) => a.current_price - b.current_price);
            } else if (state.sort === 'price-change-low') {
                sortedPortfolio = sortedPortfolio.sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h);
            } else if (state.sort === 'price-change-high') {
                sortedPortfolio = sortedPortfolio.sort((a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h);
            } else if (state.sort === 'market-low') {
                sortedPortfolio = sortedPortfolio.sort((a, b) => b.market_cap - a.market_cap);
            } else if (state.sort === 'market-high') {
                sortedPortfolio = sortedPortfolio.sort((a, b) => a.market_cap - b.market_cap);
            } else if (state.sort === 'market-change-low') {
                sortedPortfolio = sortedPortfolio.sort((a, b) => b.market_cap_change_percentage_24h - a.market_cap_change_percentage_24h);
            } else if (state.sort === 'market-change-high') {
                sortedPortfolio = sortedPortfolio.sort((a, b) => a.market_cap_change_percentage_24h - b.market_cap_change_percentage_24h);
            } else if (state.sort === 'ath-low') {
                sortedPortfolio = sortedPortfolio.sort((a, b) => b.ath - a.ath);
            } else if (state.sort === 'ath-high') {
                sortedPortfolio = sortedPortfolio.sort((a, b) => a.ath - b.ath);
            }
            state.sorted_portfolio = sortedPortfolio;
        },
        addToPortfolio: (state, { payload }) => {
            let { id, coin } = payload;
            coin = { ...coin, amount: 1 };
            const asset = state.portfolio.find((coin) => coin.id === id);
            if (asset) {
                return;
            } else {
                displayMessage(id);
                state.portfolio = [...state.portfolio, coin];
                localStorage.setItem('portfolio', JSON.stringify(state.portfolio));
            }
        },
    },
});

export const { addToPortfolio, updateSort, sortPortfolio } = portfolioSlice.actions;
export default portfolioSlice.reducer;
