import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorage } from '../../utils/getLocalStorage';
import Swal from 'sweetalert2';

const initialState = {
    portfolio: getLocalStorage('portfolio'),
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
        handleSubmit: (state, { payload: { amount, price, coinName } }) => {
            console.log(coinName);
            state.portfolio.map((coin) => {
                console.log(coin.id);
                if (coin.id.toLowerCase() === coinName.toLowerCase()) {
                    coin.amount = parseInt(amount);
                    coin.price = parseInt(price);
                }
                return coin;
            });
        },
        addToPortfolio: (state, { payload }) => {
            let { id, coin } = payload;
            coin = { ...coin, amount: 1, price: coin.current_price };
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

export const { addToPortfolio, handleSubmit } = portfolioSlice.actions;
export default portfolioSlice.reducer;
