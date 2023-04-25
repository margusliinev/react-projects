import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './features/navigation/navigationSlice';
import coinsReducer from './features/coins/coinsSlice';
import featuredReducer from './features/featured/featuredSlice';
import exchangesReducer from './features/exchanges/exchangesSlice';
import coinReducer from './features/coin/coinSlice';
import chartReducer from './features/chart/chartSlice';
import portfolioReducer from './features/portfolio/portfolioSlice';

const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        coins: coinsReducer,
        featured: featuredReducer,
        exchanges: exchangesReducer,
        coin: coinReducer,
        chart: chartReducer,
        portfolio: portfolioReducer,
    },
});

export { store };
