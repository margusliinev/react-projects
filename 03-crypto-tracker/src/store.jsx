import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './features/navigation/navigationSlice';
import coinsReducer from './features/coins/coinsSlice';
import featuredReducer from './features/featured/featuredSlice';
import exchangesReducer from './features/exchanges/exchangesSlice';

const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        coins: coinsReducer,
        featured: featuredReducer,
        exchanges: exchangesReducer,
    },
});

export { store };
