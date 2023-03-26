import React from 'react';
import { CoinsFilters, CoinsSort, CoinsList, CoinsPagination } from '../components';

const CoinsTable = () => {
    return (
        <section className='coins-table'>
            <CoinsFilters />
            <div className='coins-box'>
                <CoinsSort />
                <CoinsList />
            </div>
            <CoinsPagination />
        </section>
    );
};

export default CoinsTable;
