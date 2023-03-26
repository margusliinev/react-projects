import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './features/navigation/navigationSlice';
import coinsReducer from './features/coins/coinsSlice';
import globalReducer from './features/global/globalSlice';

const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        coins: coinsReducer,
        global: globalReducer,
    },
});

export { store };
