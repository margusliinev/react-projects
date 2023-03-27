import React from 'react';
import { CoinsFilters, ExtraFilters, CoinsSort, CoinsList, CoinsPagination } from '../components';

const CoinsTable = () => {
    return (
        <section className='coins-table'>
            <CoinsFilters />
            <ExtraFilters />
            <div className='coins-box'>
                <CoinsSort />
                <CoinsList />
            </div>
            <CoinsPagination />
        </section>
    );
};

export default CoinsTable;
