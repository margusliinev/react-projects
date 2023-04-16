import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    chart_loading: false,
    chart_error: false,
    chart_days: 7,
    chart_prices: [],
    chart_labels_x: [],
};

const fetchChart = createAsyncThunk('chart/fetchChart', async (url) => {
    const response = await axios(url);
    return response.data;
});

const fetchChartXLabels = createAsyncThunk('chart/fetchChartXLabels', async (url) => {
    const response = await axios(url);
    return response.data;
});

const chartSlice = createSlice({
    name: 'chart',
    initialState,
    reducers: {
        changeChart: (state, { payload }) => {
            state.chart_days = parseInt(payload);
        },
    },
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
        builder
            .addCase(fetchChartXLabels.pending, (state) => {
                state.chart_loading = true;
            })
            .addCase(fetchChartXLabels.rejected, (state) => {
                state.chart_loading = false;
                state.chart_error = true;
            })
            .addCase(fetchChartXLabels.fulfilled, (state, action) => {
                state.chart_loading = false;
                state.chart_labels_x = action.payload.prices;
            });
    },
});

export { fetchChart, fetchChartXLabels };
export const { changeChart } = chartSlice.actions;
export default chartSlice.reducer;
