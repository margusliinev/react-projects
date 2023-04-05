import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchExchanges } from '../features/exchanges/exchangesSlice';

const ExchangesPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExchanges());
    }, []);

    return <main>ExchangesPage</main>;
};

export default ExchangesPage;
