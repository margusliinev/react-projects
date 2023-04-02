import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './features/navigation/navigationSlice';
import coinsReducer from './features/coins/coinsSlice';
import featuredReducer from './features/featured/featuredSlice';

const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        coins: coinsReducer,
        featured: featuredReducer,
    },
});

export { store };
