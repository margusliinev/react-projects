import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h';

const initialState = {
    coins_loading: false,
    coins_error: false,
    coins: [],
    filtered_coins: [],
    sort: 'number-low',
    filters: {
        search: '',
        marketMin: 0,
        marketMax: 0,
        priceMin: 0,
        priceMax: 0,
        changeMin: 0,
        changeMax: 0,
    },
    extraFiltersAmount: 0,
    marketFilter: false,
    priceFilter: false,
    changeFilter: false,
    btc: {},
};

const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
    const response = await axios(url);
    return response.data;
});

const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        updateFilters: (state, { payload: { name, value } }) => {
            state.filters[name] = value;
        },
        updateExtraFilters: (state, { payload: { marketMin, marketMax, priceMin, priceMax, changeMin, changeMax } }) => {
            if (marketMin === '' && marketMax === '') {
                if (state.marketFilter) {
                    state.extraFiltersAmount = state.extraFiltersAmount - 1;
                    state.filters.marketMin = 0;
                    state.filters.marketMax = 999999999999;
                }
                state.marketFilter = false;
            } else if (marketMin && marketMax) {
                state.filters.marketMin = parseInt(marketMin);
                state.filters.marketMax = parseInt(marketMax);
                if (!state.marketFilter) {
                    state.extraFiltersAmount += 1;
                }
                state.marketFilter = true;
            }
            if (priceMin === '' && priceMax === '') {
                if (state.priceFilter) {
                    state.extraFiltersAmount = state.extraFiltersAmount - 1;
                    state.filters.priceMin = 0;
                    state.filters.priceMax = 99999;
                }
                state.priceFilter = false;
            } else if (priceMin && priceMax) {
                state.filters.priceMin = parseInt(priceMin);
                state.filters.priceMax = parseInt(priceMax);
                if (!state.priceFilter) {
                    state.extraFiltersAmount += 1;
                }
                state.priceFilter = true;
            }
            if (changeMin === '' && changeMax === '') {
                if (state.changeFilter) {
                    state.extraFiltersAmount = state.extraFiltersAmount - 1;
                    state.filters.changeMin = -100;
                    state.filters.changeMax = 1000;
                }
                state.changeFilter = false;
            } else if (changeMin && changeMax) {
                state.filters.changeMin = parseInt(changeMin);
                state.filters.changeMax = parseInt(changeMax);
                if (!state.changeFilter) {
                    state.extraFiltersAmount += 1;
                }
                state.changeFilter = true;
            }
        },
        removeFilters: (state) => {
            state.marketFilter = false;
            state.priceFilter = false;
            state.changeFilter = false;
            state.extraFiltersAmount = 0;
        },
        filterCoins: (state) => {
            let tempCoins = [...state.coins];
            if (state.filters.search) {
                tempCoins = tempCoins.filter((coin) => {
                    let name = coin.name.toLowerCase();
                    if (name.includes(state.filters.search)) {
                        return coin;
                    }
                });
            }
            if ((state.filters.marketMin && state.filters.marketMax) || (state.filters.marketMin === 0 && state.filters.marketMax) || (state.filters.marketMin && state.filters.marketMax === 0)) {
                tempCoins = tempCoins.filter((coin) => {
                    if (coin.market_cap >= state.filters.marketMin && coin.market_cap <= state.filters.marketMax) {
                        return coin;
                    }
                });
            }
            if ((state.filters.priceMin && state.filters.priceMax) || (state.filters.priceMin === 0 && state.filters.priceMax) || (state.filters.priceMin && state.filters.priceMax === 0)) {
                tempCoins = tempCoins.filter((coin) => {
                    if (coin.current_price >= state.filters.priceMin && coin.current_price <= state.filters.priceMax) {
                        return coin;
                    }
                });
            }
            if ((state.filters.changeMin && state.filters.changeMax) || (state.filters.changeMin === 0 && state.filters.changeMax) || (state.filters.changeMin && state.filters.changeMax === 0)) {
                tempCoins = tempCoins.filter((coin) => {
                    if (coin.market_cap_change_percentage_24h >= state.filters.changeMin && coin.market_cap_change_percentage_24h <= state.filters.changeMax) {
                        return coin;
                    }
                });
            }
            state.filtered_coins = tempCoins;
        },
        updateSort: (state, { payload }) => {
            state.sort = payload;
        },
        sortCoins: (state) => {
            let sortedCoins = [...state.filtered_coins];
            if (state.sort === 'number-low') {
                sortedCoins = sortedCoins.sort((a, b) => a.number - b.number);
            } else if (state.sort === 'number-high') {
                sortedCoins = sortedCoins.sort((a, b) => b.number - a.number);
            } else if (state.sort === 'name-a-z') {
                sortedCoins = sortedCoins.sort((a, b) => a.name.localeCompare(b.name));
            } else if (state.sort === 'name-z-a') {
                sortedCoins = sortedCoins.sort((a, b) => b.name.localeCompare(a.name));
            } else if (state.sort === 'growth-low') {
                sortedCoins = sortedCoins.sort((a, b) => b.market_cap_change_percentage_24h - a.market_cap_change_percentage_24h);
            } else if (state.sort === 'growth-high') {
                sortedCoins = sortedCoins.sort((a, b) => a.market_cap_change_percentage_24h - b.market_cap_change_percentage_24h);
            } else if (state.sort === 'price-low') {
                sortedCoins = sortedCoins.sort((a, b) => b.current_price - a.current_price);
            } else if (state.sort === 'price-high') {
                sortedCoins = sortedCoins.sort((a, b) => a.current_price - b.current_price);
            } else if (state.sort === 'price-btc-low') {
                sortedCoins = sortedCoins.sort((a, b) => b.current_price - a.current_price);
            } else if (state.sort === 'price-btc-high') {
                sortedCoins = sortedCoins.sort((a, b) => a.current_price - b.current_price);
            } else if (state.sort === 'marketCap-low') {
                sortedCoins = sortedCoins.sort((a, b) => b.market_cap - a.market_cap);
            } else if (state.sort === 'marketCap-high') {
                sortedCoins = sortedCoins.sort((a, b) => a.market_cap - b.market_cap);
            } else if (state.sort === 'priceLow-low') {
                sortedCoins = sortedCoins.sort((a, b) => b.low_24h - a.low_24h);
            } else if (state.sort === 'priceLow-high') {
                sortedCoins = sortedCoins.sort((a, b) => a.low_24h - b.low_24h);
            } else if (state.sort === 'priceHigh-low') {
                sortedCoins = sortedCoins.sort((a, b) => b.high_24h - a.high_24h);
            } else if (state.sort === 'priceHigh-high') {
                sortedCoins = sortedCoins.sort((a, b) => a.high_24h - b.high_24h);
            }
            state.filtered_coins = sortedCoins;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCoins.pending, (state) => {
                state.coins_loading = true;
            })
            .addCase(fetchCoins.rejected, (state) => {
                state.coins_loading = false;
                state.coins_error = true;
            })
            .addCase(fetchCoins.fulfilled, (state, action) => {
                state.coins_loading = false;
                state.coins = [...action.payload];
                state.filtered_coins = [...action.payload];
                state.filtered_coins.map((item, index) => {
                    item.number = index + 1;
                });
                state.btc = state.filtered_coins.find((item) => (item.name = 'bitcoin'));
            });
    },
});

export { fetchCoins };
export const { updateSort, sortCoins, updateFilters, filterCoins, updateExtraFilters, removeFilters, displayError } = coinsSlice.actions;
export default coinsSlice.reducer;
