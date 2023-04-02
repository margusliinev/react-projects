import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether&vs_currencies=eur&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&precision=2';

const initialState = {
    featured_loading: false,
    featured_error: false,
    featured: [],
};

const fetchFeatured = createAsyncThunk('featured/fetchFeatured', async () => {
    const response = await axios(url);
    return response.data;
});

const featuredSlice = createSlice({
    name: 'featured',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeatured.pending, (state) => {
                state.featured_loading = true;
            })
            .addCase(fetchFeatured.rejected, (state) => {
                state.featured_loading = false;
                state.featured_error = true;
            })
            .addCase(fetchFeatured.fulfilled, (state, action) => {
                state.featured_loading = false;
                state.featured = action.payload;
            });
    },
});

export { fetchFeatured };
export default featuredSlice.reducer;
