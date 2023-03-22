import React, { useEffect } from 'react';
import { MarketInfo, CoinsFilters, CoinsSort, CoinsList, CoinsPagination } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../features/coins/coinsSlice';
import { filterCoins, sortCoins } from '../features/coins/coinsSlice';

const CoinsPage = () => {
    const dispatch = useDispatch();
    const { sort, filters } = useSelector((store) => store.coins);

    // PRODUCTION
    // useEffect(() => {
    //     dispatch(fetchCoins());
    //     setInterval(() => {
    //         dispatch(fetchCoins());
    //     }, 120000);
    // }, []);

    // DEVELOPMENT
    useEffect(() => {
        dispatch(fetchCoins());
    }, []);

    useEffect(() => {
        dispatch(filterCoins());
        dispatch(sortCoins());
    }, [sort, filters]);

    return (
        <main className='coins'>
            <div className='coins-container'>
                <div className='coins-header'>
                    <h4>Best Coin Price Tracker in the Market</h4>
                    <h6>Crypto Tracker is an application designed to help users track the real-time value and performance of their cryptocurrency investments.</h6>
                </div>
                <MarketInfo />
                <CoinsFilters />
                <div className='coins-table'>
                    <CoinsSort />
                    <CoinsList />
                </div>
                <CoinsPagination />
            </div>
        </main>
    );
};

export default CoinsPage;
