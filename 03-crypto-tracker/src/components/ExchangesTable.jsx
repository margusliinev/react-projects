import React from 'react';
import { ExchangesFilters, ExchangesSort, ExchangesList, ExchangesPagination } from '../components';

const ExchangesTable = () => {
    return (
        <section>
            <ExchangesFilters />
            <ExchangesSort />
            <ExchangesList />
            <ExchangesPagination />
        </section>
    );
};

export default ExchangesTable;
