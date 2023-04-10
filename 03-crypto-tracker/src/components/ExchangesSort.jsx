import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSort } from '../features/exchanges/exchangesSlice';

const ExchangesSort = () => {
    const dispatch = useDispatch();
    const { sort } = useSelector((store) => store.exchanges);

    return (
        <div className='exchanges-sort'>
            <label htmlFor='sort'>Sort</label>
            <select name='sort' id='sort' value={sort} onChange={() => dispatch(updateSort())}>
                <option value='trust-rank-lowest'>Trust Rank (Lowest)</option>
                <option value='trust-rank-highest'>Trust Rank (Highest)</option>
                <option value='trade-volume-lowest'>Trade Volume (Lowest)</option>
                <option value='trade-volume-highest'>Trade Volume (Highest)</option>
                <option value='year-established-lowest'>Year Established (A - Z)</option>
                <option value='year-established-highest'>Year Established (Z - A)</option>
            </select>
        </div>
    );
};

export default ExchangesSort;
