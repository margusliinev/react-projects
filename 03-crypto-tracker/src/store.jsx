import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './features/navigation/navigationSlice';

const store = configureStore({
    reducer: {
        navigation: navigationReducer,
    },
});

export { store };
