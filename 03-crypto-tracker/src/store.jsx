import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './features/navigation/navigationSlice';
import coinsReducer from './features/coins/coinsSlice';

const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        coins: coinsReducer,
    },
});

export { store };
