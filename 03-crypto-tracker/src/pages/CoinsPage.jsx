import React, { useEffect } from 'react';
import { PageHero, FeaturedCoins, CoinsTable, Loader } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../features/coins/coinsSlice';
import { filterCoins, sortCoins } from '../features/coins/coinsSlice';
import { fetchFeatured } from '../features/featured/featuredSlice';

const CoinsPage = () => {
    const dispatch = useDispatch();
    const { coins, coins_loading, filters, sort } = useSelector((store) => store.coins);

    useEffect(() => {
        dispatch(fetchFeatured());
        dispatch(fetchCoins());
    }, []);

    useEffect(() => {
        dispatch(filterCoins());
        dispatch(sortCoins());
    }, [sort, filters, coins]);

    if (coins_loading) {
        return (
            <main className='coins'>
                <div className='coins-container'>
                    <PageHero />
                    <FeaturedCoins />
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
