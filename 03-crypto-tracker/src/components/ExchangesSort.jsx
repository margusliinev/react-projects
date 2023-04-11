import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSort } from '../features/exchanges/exchangesSlice';

const ExchangesSort = () => {
    const dispatch = useDispatch();
    const { sort, order, perPage } = useSelector((store) => store.exchanges);

    return (
        <div className='exchanges-sort'>
            <div>
                <label htmlFor='sort'>Sort</label>
                <select name='sort' id='sort' value={sort} onChange={(e) => dispatch(updateSort({ name: e.target.name, value: e.target.value }))}>
                    <option value='trust-rank'>Trust Rank</option>
                    <option value='trade-volume'>Trade Volume</option>
                    <option value='year'>Year</option>
                </select>
            </div>
            <div>
                <label htmlFor='order'>Order</label>
                <select name='order' id='order' value={order} onChange={(e) => dispatch(updateSort({ name: e.target.name, value: e.target.value }))}>
                    <option value='descending'>Descending</option>
                    <option value='ascending'>Ascending</option>
                </select>
            </div>
            <div>
                <label htmlFor='perPage'>Per Page</label>
                <select name='perPage' id='perPage' value={perPage} onChange={(e) => dispatch(updateSort({ name: e.target.name, value: e.target.value }))}>
                    <option value='10'>10 Entries</option>
                    <option value='30'>30 Entries</option>
                    <option value='50'>50 Entries</option>
                </select>
            </div>
        </div>
    );
};

export default ExchangesSort;
