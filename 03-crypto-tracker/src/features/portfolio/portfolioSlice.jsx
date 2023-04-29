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
            console.log(amount, price, coinName);
            state.portfolio.map((coin) => {
                if (coin.id.toLowerCase() === coinName.toLowerCase()) {
                    coin.amount = amount;
                    coin.price = price;
                }
                return coin;
            });
        },
        addToPortfolio: (state, { payload }) => {
            const { id, coin } = payload;
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
