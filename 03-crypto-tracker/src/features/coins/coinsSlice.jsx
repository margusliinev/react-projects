import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=24h';

const initialState = {
    coins_loading: false,
    coins_error: false,
    coins: [],
    sorted_coins: [],
    sort: 'number-low',
    btc: {},
};

const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
    const response = await axios(url);
    console.log(response.data);
    return response.data;
});

const coinsSlice = createSlice({
    name: 'coins',
    initialState,
    reducers: {
        updateSort: (state, { payload }) => {
            state.sort = payload;
        },
        sortCoins: (state) => {
            if (state.sort === 'number-low') {
                state.sorted_coins = state.sorted_coins.sort((a, b) => a.number - b.number);
            } else if (state.sort === 'number-high') {
                state.sorted_coins = state.sorted_coins.sort((a, b) => b.number - a.number);
            } else if (state.sort === 'name-a-z') {
                state.sorted_coins = state.sorted_coins.sort((a, b) => a.name.localeCompare(b.name));
            } else if (state.sort === 'name-z-a') {
                state.sorted_coins = state.sorted_coins.sort((a, b) => b.name.localeCompare(a.name));
            } else if (state.sort === 'growth-low') {
                state.sorted_coins = state.sorted_coins.sort((a, b) => b.market_cap_change_percentage_24h - a.market_cap_change_percentage_24h);
            } else if (state.sort === 'growth-high') {
                state.sorted_coins = state.sorted_coins.sort((a, b) => a.market_cap_change_percentage_24h - b.market_cap_change_percentage_24h);
            } else if (state.sort === 'price-low') {
                state.sorted_coins = state.sorted_coins.sort((a, b) => b.current_price - a.current_price);
            } else if (state.sort === 'price-high') {
                state.sorted_coins = state.sorted_coins.sort((a, b) => a.current_price - b.current_price);
            } else if (state.sort === 'price-btc-low') {
                state.sorted_coins = state.sorted_coins.sort((a, b) => b.current_price - a.current_price);
            } else if (state.sort === 'price-btc-high') {
                state.sorted_coins = state.sorted_coins.sort((a, b) => a.current_price - b.current_price);
            } else if (state.sort === 'marketCap-low') {
                state.sorted_coins = state.sorted_coins.sort((a, b) => b.market_cap - a.market_cap);
            } else if (state.sort === 'marketCap-high') {
                state.sorted_coins = state.sorted_coins.sort((a, b) => a.market_cap - b.market_cap);
            } else if (state.sort === 'priceLow-low') {
                state.sorted_coins = state.sorted_coins.sort((a, b) => b.low_24h - a.low_24h);
            } else if (state.sort === 'priceLow-high') {
                state.sorted_coins = state.sorted_coins.sort((a, b) => a.low_24h - b.low_24h);
            } else if (state.sort === 'priceHigh-low') {
                state.sorted_coins = state.sorted_coins.sort((a, b) => b.high_24h - a.high_24h);
            } else if (state.sort === 'priceHigh-high') {
                state.sorted_coins = state.sorted_coins.sort((a, b) => a.high_24h - b.high_24h);
            } else {
                return { ...state };
            }
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
                state.coins = action.payload;
                state.sorted_coins = action.payload;
                state.sorted_coins.map((item, index) => {
                    item.number = index + 1;
                });
                state.btc = state.sorted_coins.find((item) => (item.name = 'bitcoin'));
            });
    },
});

export { fetchCoins };
export const { updateSort, sortCoins } = coinsSlice.actions;
export default coinsSlice.reducer;
