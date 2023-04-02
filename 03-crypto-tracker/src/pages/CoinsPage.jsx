import React, { useEffect } from 'react';
import { PageHero, MarketInfo, CoinsTable, Loader } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../features/coins/coinsSlice';
import { fetchGlobal } from '../features/global/globalSlice';
import { filterCoins, sortCoins } from '../features/coins/coinsSlice';

const CoinsPage = () => {
    const dispatch = useDispatch();
    const { coins_loading, filters, sort } = useSelector((store) => store.coins);
    const { global_loading } = useSelector((store) => store.global);

    useEffect(() => {
        dispatch(fetchGlobal());
        dispatch(fetchCoins());
    }, []);

    useEffect(() => {
        dispatch(filterCoins());
        dispatch(sortCoins());
    }, [sort, filters]);

    if (coins_loading || global_loading) {
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
                <MarketInfo />
                <CoinsTable />
            </div>
        </main>
    );
};

export default CoinsPage;
