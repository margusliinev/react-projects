import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExchanges } from '../features/exchanges/exchangesSlice';
import { fetchFeatured } from '../features/featured/featuredSlice';
import { Loader, PageHero, FeaturedCoins, ExchangesTable } from '../components';

const ExchangesPage = () => {
    const dispatch = useDispatch();
    const { filters, sort, exchanges_loading } = useSelector((store) => store.exchanges);
    const { featured_loading } = useSelector((store) => store.featured);

    useEffect(() => {
        dispatch(fetchFeatured());
        dispatch(fetchExchanges());
    }, []);

    if (featured_loading || exchanges_loading) {
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
                <FeaturedCoins />
                <ExchangesTable />
            </div>
        </main>
    );
};

export default ExchangesPage;
