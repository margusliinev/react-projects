import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coingecko.com/api/v3/exchanges?per_page=250';

const initialState = {
    exchanges_loading: false,
    exchanges_error: false,
    exchanges: [],
    sort: '',
};

const fetchExchanges = createAsyncThunk('exchanges/fetchExchanges', async () => {
    const response = await axios(url);
    return response.data;
});

const exchangesSlice = createSlice({
    name: 'exchanges',
    initialState,
    reducers: {
        updateSort: (state, { payload }) => {
            state.sort = payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchExchanges.pending, (state) => {
                state.exchanges_loading = true;
            })
            .addCase(fetchExchanges.rejected, (state) => {
                state.exchanges_loading = false;
                state.exchanges_error = true;
            })
            .addCase(fetchExchanges.fulfilled, (state, action) => {
                state.exchanges_loading = false;
                state.exchanges = action.payload;
            });
    },
});

export { fetchExchanges };
export const { updateSort } = exchangesSlice.actions;
export default exchangesSlice.reducer;
