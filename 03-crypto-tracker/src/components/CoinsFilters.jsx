import React from 'react';
import { TbSearch } from 'react-icons/tb';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilters } from '../features/coins/coinsSlice';
import { openModal } from '../features/navigation/navigationSlice';

const CoinsFilters = () => {
    const { extraFiltersAmount } = useSelector((store) => store.coins);
    const dispatch = useDispatch();

    return (
        <div className='coins-filters'>
            <div className='search-filter-container'>
                <input type='text' className='search-filter' placeholder='Search' name='search' onChange={(e) => dispatch(updateFilters({ name: e.target.name, value: e.target.value }))} />
                <span>
                    <TbSearch />
                </span>
            </div>
            <button type='button' className={extraFiltersAmount === 0 ? 'btn add-filter-btn' : 'btn add-filter-btn active-filters'} onClick={() => dispatch(openModal())}>
                {extraFiltersAmount === 0 ? '+ Add Filter' : `+ ${extraFiltersAmount} More Filters`}
            </button>
        </div>
    );
};

export default CoinsFilters;
