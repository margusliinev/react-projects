import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExchanges } from '../features/exchanges/exchangesSlice';
import { Loader, PageHero, FeaturedCoins, ExchangesTable } from '../components';
import { fetchFeatured } from '../features/featured/featuredSlice';

const ExchangesPage = () => {
    const dispatch = useDispatch();
    const { exchanges_loading, filters, sort } = useSelector((store) => store.exchanges);

    useEffect(() => {
        dispatch(fetchFeatured());
        dispatch(fetchExchanges());
    }, []);

    if (exchanges_loading) {
        return (
            <main className='exchanges'>
                <div className='exchanges-container'>
                    <PageHero />
                    <FeaturedCoins />
                    <Loader />
                </div>
            </main>
        );
    }

    return (
        <main className='exchanges'>
            <div className='exchanges-container'>
                <PageHero />
                <FeaturedCoins />
                <ExchangesTable />
            </div>
        </main>
    );
};

export default ExchangesPage;
