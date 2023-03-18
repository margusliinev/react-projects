import React from 'react';
import { MarketInfo, CoinsFilters, CoinsSort, CoinsList, CoinsPagination } from '../components';

const CoinsPage = () => {
    return (
        <section className='coins'>
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
        </section>
    );
};

export default CoinsPage;
