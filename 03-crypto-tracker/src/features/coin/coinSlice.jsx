import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    coin_loading: false,
    coin_error: false,
    coin: {},
    coin_price: 0,
    coin_value: '',
    currency_value: '',
};

const fetchCoin = createAsyncThunk('coin/fetchCoin', async (url) => {
    const response = await axios(url);
    return response.data;
});

const coinSlice = createSlice({
    name: 'coin',
    initialState,
    reducers: {
        removeCoinError: (state) => {
            state.coin_error = false;
        },
        updateValue: (state, { payload }) => {
            state.coin_value = parseInt(payload);
        },
        convertValue: (state) => {
            if (!state.coin_value) {
                state.coin_value = '';
                state.currency_value = '';
            }
            if (state.coin_value) {
                state.currency_value = (state.coin_value * state.coin_price).toFixed(2);
            }
        },
        resetConverter: (state) => {
            state.coin_value = '';
            state.currency_value = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoin.pending, (state) => {
                state.coin_loading = true;
            })
            .addCase(fetchCoin.rejected, (state) => {
                state.coin_loading = false;
                state.coin_error = true;
            })
            .addCase(fetchCoin.fulfilled, (state, action) => {
                state.coin_loading = false;
                state.coin = action.payload;
                state.coin_price = state.coin.market_data.current_price.eur;
            });
    },
});

export { fetchCoin };
export const { removeCoinError, updateValue, convertValue, resetConverter } = coinSlice.actions;
export default coinSlice.reducer;
