import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    coin_loading: false,
    coin_error: false,
    coin: {},
};

const fetchCoin = createAsyncThunk('coin/fetchCoin', async (url) => {
    const response = await axios(url);
    return response.data;
});

const coinSlice = createSlice({
    name: 'coin',
    initialState,
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
            });
    },
});

export { fetchCoin };
export default coinSlice.reducer;
