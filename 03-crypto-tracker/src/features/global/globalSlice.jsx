import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.coingecko.com/api/v3/global';

const initialState = {
    global_loading: false,
    global_error: false,
    global: [],
};

const fetchGlobal = createAsyncThunk('global/fetchGlobal', async () => {
    const response = await axios(url);
    return response.data.data;
});

const globalSlice = createSlice({
    name: 'global',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchGlobal.pending, (state) => {
                state.global_loading = true;
            })
            .addCase(fetchGlobal.rejected, (state) => {
                state.global_loading = false;
                state.global_error = true;
            })
            .addCase(fetchGlobal.fulfilled, (state, action) => {
                state.global_loading = false;
                state.global = action.payload;
            });
    },
});

export { fetchGlobal };
export default globalSlice.reducer;
