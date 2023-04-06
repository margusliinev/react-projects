import React, { useEffect } from 'react';
import { PageHero, FeaturedCoins, CoinsTable, Loader } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../features/coins/coinsSlice';
import { fetchFeatured } from '../features/featured/featuredSlice';
import { filterCoins, sortCoins } from '../features/coins/coinsSlice';

const CoinsPage = () => {
    const dispatch = useDispatch();
    const { filters, sort } = useSelector((store) => store.coins);
    const { featured_loading, coins_loading } = useSelector((store) => store.featured);

    useEffect(() => {
        dispatch(fetchFeatured());
        dispatch(fetchCoins());
    }, []);

    useEffect(() => {
        dispatch(filterCoins());
        dispatch(sortCoins());
    }, [sort, filters]);

    if (featured_loading || coins_loading) {
        return (
            <main className='coins'>
                <div className='coins-container'>
                    <PageHero />
                    <Loader />
                </div>
            </main>
        );
    }

    return (
        <main className='coins'>
            <div className='coins-container'>
                <PageHero />
                <FeaturedCoins />
                <CoinsTable />
            </div>
        </main>
    );
};

export default CoinsPage;
