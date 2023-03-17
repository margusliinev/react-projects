import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSidebarOpen: false,
};

const navigationSlice = createSlice({
    name: 'navigation',
    initialState,
    reducers: {
        openSidebar: (state) => {
            state.isSidebarOpen = true;
        },
        closeSidebar: (state) => {
            state.isSidebarOpen = false;
        },
    },
});

export const { openSidebar, closeSidebar } = navigationSlice.actions;
export default navigationSlice.reducer;
