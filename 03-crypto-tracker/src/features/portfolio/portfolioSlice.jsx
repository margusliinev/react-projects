import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    portfolio: [],
};

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        addToPortfolio: (state, { payload }) => {
            const { id, coin } = payload;
            const asset = state.portfolio.find((coin) => coin.id === id);
            if (asset) {
                return;
            } else {
                state.portfolio = [...state.portfolio, coin];
            }
        },
    },
});

export const { addToPortfolio } = portfolioSlice.actions;
export default portfolioSlice.reducer;
