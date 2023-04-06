import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExchanges } from '../features/exchanges/exchangesSlice';
import { Loader, PageHero, FeaturedExchanges, ExchangesTable } from '../components';

const ExchangesPage = () => {
    const { exchanges_loading } = useSelector((store) => store.exchanges);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExchanges());
    }, []);

    if (exchanges_loading) {
        return (
            <main className='exchanges'>
                <div className='exchanges-container'>
                    <PageHero />
                    <Loader />
                </div>
            </main>
        );
    }

    return (
        <main className='exchanges'>
            <div className='exchanges-container'>
                <PageHero />
                <FeaturedExchanges />
                <ExchangesTable />
            </div>
        </main>
    );
};

export default ExchangesPage;
