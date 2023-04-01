import React, { useEffect } from 'react';
import { PageHero, MarketInfo, CoinsTable, Loader } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../features/coins/coinsSlice';
import { fetchGlobal } from '../features/global/globalSlice';
import { filterCoins, sortCoins } from '../features/coins/coinsSlice';

const CoinsPage = () => {
    const dispatch = useDispatch();
    const { filters, sort, page } = useSelector((store) => store.coins);
    const { global_loading } = useSelector((store) => store.global);

    useEffect(() => {
        dispatch(fetchGlobal());
    }, []);

    useEffect(() => {
        dispatch(fetchCoins(page));
    }, [page]);

    useEffect(() => {
        dispatch(filterCoins());
        dispatch(sortCoins());
    }, [sort, filters]);

    if (global_loading) {
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
