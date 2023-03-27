import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../features/navigation/navigationSlice';

const ExtraFilters = () => {
    const { isModalOpen } = useSelector((store) => store.navigation);
    const dispatch = useDispatch();

    return (
        <form className={isModalOpen ? 'extra-filters modal-open' : 'extra-filters modal-close'}>
            <div className='extra-filters-container'>
                <div className='extra-filters-header'>
                    <h6>More Filters</h6>
                </div>
                <div className='content-divider'></div>
                <div className='extra-filters-inputs'>
                    <p>Market Cap Range</p>
                    <div className='extra-filters-input-container'>
                        <input type='text' className='extra-filters-input' placeholder='€0' />
                        <p>to</p>
                        <input type='text' className='extra-filters-input' placeholder='€999,999,999,999' />
                    </div>
                    <p>Price Range</p>
                    <div className='extra-filters-input-container'>
                        <input type='text' className='extra-filters-input' placeholder='€0' />
                        <p>to</p>
                        <input type='text' className='extra-filters-input' placeholder='€99,999' />
                    </div>
                    <p>Change Range</p>
                    <div className='extra-filters-input-container'>
                        <input type='text' className='extra-filters-input' placeholder='-100%' />
                        <p>to</p>
                        <input type='text' className='extra-filters-input' placeholder='1000%' />
                    </div>
                </div>
                <div className='extra-filters-buttons'>
                    <button type='button' className='cancel-button' onClick={() => dispatch(closeModal())}>
                        Cancel
                    </button>
                    <button type='submit' className='btn apply-filter-button'>
                        Apply Filter
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ExtraFilters;
