import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coingecko.com/api/v3/exchanges?per_page=250';

const initialState = {
    exchanges_loading: false,
    exchanges_error: false,
    exchanges: [],
    sorted_exchanges: [],
    displayed_exchanges: [],
    page_exchanges: [],
    sort: 'trust-rank',
    order: 'descending',
    perPage: '20',
    page: 1,
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
            } else if (state.sort === 'year' && state.order === 'descending') {
                sortedExchanges = state.sorted_exchanges.sort((a, b) => b.year_established - a.year_established);
            } else if (state.sort === 'year' && state.order === 'ascending') {
                sortedExchanges = state.sorted_exchanges.sort((a, b) => a.year_established - b.year_established);
            }
            state.sorted_exchanges = sortedExchanges;
            state.page_exchanges = Array.from({ length: Math.ceil(state.sorted_exchanges.length / parseInt(state.perPage)) }, (_, index) => {
                const start = index * parseInt(state.perPage);
                return state.sorted_exchanges.slice(start, start + parseInt(state.perPage));
            });
            state.displayed_exchanges = state.page_exchanges[state.page - 1];
        },
        changePage: (state, { payload }) => {
            state.page = payload;
            state.page_exchanges = Array.from({ length: Math.ceil(state.sorted_exchanges.length / parseInt(state.perPage)) }, (_, index) => {
                const start = index * parseInt(state.perPage);
                return state.sorted_exchanges.slice(start, start + parseInt(state.perPage));
            });
            state.displayed_exchanges = state.page_exchanges[state.page - 1];
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
                state.displayed_exchanges = state.sorted_exchanges.slice(0, parseInt(state.perPage));
            });
    },
});

export { fetchExchanges };
export const { updateSort, sortExchanges, changePage } = exchangesSlice.actions;
export default exchangesSlice.reducer;
