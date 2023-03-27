import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isSidebarOpen: false,
    isModalOpen: false,
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
        openModal: (state) => {
            state.isModalOpen = true;
        },
        closeModal: (state) => {
            state.isModalOpen = false;
        },
    },
});

export const { openSidebar, closeSidebar, openModal, closeModal } = navigationSlice.actions;
export default navigationSlice.reducer;
