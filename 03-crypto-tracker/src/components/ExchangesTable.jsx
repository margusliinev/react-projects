import React from 'react';
import { ExchangesSort, ExchangesList, ExchangesPagination } from '../components';

const ExchangesTable = () => {
    return (
        <section className='exchanges-table'>
            <ExchangesSort />
            <ExchangesList />
            <ExchangesPagination />
        </section>
    );
};

export default ExchangesTable;
