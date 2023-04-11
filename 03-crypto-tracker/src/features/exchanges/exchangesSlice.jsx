import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coingecko.com/api/v3/exchanges?per_page=250';

const initialState = {
    exchanges_loading: false,
    exchanges_error: false,
    exchanges: [],
    sorted_exchanges: [],
    sort: 'trust-rank',
    order: 'descending',
    perPage: '10',
};

const fetchExchanges = createAsyncThunk('exchanges/fetchExchanges', async () => {
    const response = await axios(url);
    return response.data;
});

const exchangesSlice = createSlice({
    name: 'exchanges',
    initialState,
    reducers: {
        updateSort: (state, { payload: { name, value } }) => {
            state[name] = value;
        },
        sortExchanges: (state) => {
            let sortedExchanges = [...state.sorted_exchanges];
            if (state.sort === 'trust-rank' && state.order === 'descending') {
                sortedExchanges = state.sorted_exchanges.sort((a, b) => a.trust_score_rank - b.trust_score_rank);
            } else if (state.sort === 'trust-rank' && state.order === 'ascending') {
                sortedExchanges = state.sorted_exchanges.sort((a, b) => b.trust_score_rank - a.trust_score_rank);
            } else if (state.sort === 'trade-volume' && state.order === 'descending') {
                sortedExchanges = state.sorted_exchanges.sort((a, b) => b.trade_volume_24h_btc - a.trade_volume_24h_btc);
            } else if (state.sort === 'trade-volume' && state.order === 'ascending') {
                sortedExchanges = state.sorted_exchanges.sort((a, b) => a.trade_volume_24h_btc - b.trade_volume_24h_btc);
            }
            state.sorted_exchanges = sortedExchanges;
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
                state.exchanges = [...action.payload];
                state.exchanges.map((exchange) => {
                    if (!exchange.trust_score_rank) {
                        exchange.trust_score_rank = 250;
                    }
                    return exchange;
                });
                state.sorted_exchanges = [...state.exchanges];
            });
    },
});

export { fetchExchanges };
export const { updateSort, sortExchanges } = exchangesSlice.actions;
export default exchangesSlice.reducer;
