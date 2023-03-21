import React from 'react';
import { TbSearch } from 'react-icons/tb';

const CoinsFilters = () => {
    return (
        <div className='coins-filters'>
            <div className='search-filter-container'>
                <input type='text' className='search-filter' placeholder='Search' />
                <span>
                    <TbSearch />
                </span>
            </div>
            <button type='button' className='btn add-filter-btn'>
                + Add Filter
            </button>
        </div>
    );
};

export default CoinsFilters;
