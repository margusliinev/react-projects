import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    chart_loading: false,
    chart_error: false,
    chart_days: 7,
    chart_prices: [],
};

const fetchChart = createAsyncThunk('chart/fetchChart', async (url) => {
    const response = await axios(url);
    return response.data;
});

const chartSlice = createSlice({
    name: 'chart',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchChart.pending, (state) => {
                state.chart_loading = true;
            })
            .addCase(fetchChart.rejected, (state) => {
                state.chart_loading = false;
                state.chart_error = true;
            })
            .addCase(fetchChart.fulfilled, (state, action) => {
                state.chart_loading = false;
                state.chart_prices = action.payload.prices;
            });
    },
});

export { fetchChart };
export default chartSlice.reducer;
