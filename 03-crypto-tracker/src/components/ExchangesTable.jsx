import React from 'react';
import { ExchangesFilters, ExchangesSort, ExchangesList, ExchangesPagination } from '../components';

const ExchangesTable = () => {
    return (
        <section className='exchanges-table'>
            <div className='exchanges-sort-filter-container'>
                <ExchangesFilters />
                <ExchangesSort />
            </div>
            <ExchangesList />
            <ExchangesPagination />
        </section>
    );
};

export default ExchangesTable;
