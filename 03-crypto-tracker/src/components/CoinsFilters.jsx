import React from 'react';
import { TbSearch } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { updateFilters } from '../features/coins/coinsSlice';
import { openModal } from '../features/navigation/navigationSlice';

const CoinsFilters = () => {
    const dispatch = useDispatch();

    return (
        <div className='coins-filters'>
            <div className='search-filter-container'>
                <input type='text' className='search-filter' placeholder='Search' name='search' onChange={(e) => dispatch(updateFilters({ name: e.target.name, value: e.target.value }))} />
                <span>
                    <TbSearch />
                </span>
            </div>
            <button type='button' className='btn add-filter-btn' onClick={() => dispatch(openModal())}>
                + Add Filter
            </button>
        </div>
    );
};

export default CoinsFilters;
