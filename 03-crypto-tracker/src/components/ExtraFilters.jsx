import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../features/navigation/navigationSlice';
import { updateExtraFilters } from '../features/coins/coinsSlice';

const ExtraFilters = () => {
    const { isModalOpen } = useSelector((store) => store.navigation);
    const dispatch = useDispatch();

    return (
        <form
            className={isModalOpen ? 'extra-filters modal-open' : 'extra-filters modal-close'}
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                    updateExtraFilters({
                        marketMin: e.currentTarget.querySelector("[name='marketMin']").value,
                        marketMax: e.currentTarget.querySelector("[name='marketMax']").value,
                        priceMin: e.currentTarget.querySelector("[name='priceMin']").value,
                        priceMax: e.currentTarget.querySelector("[name='priceMax']").value,
                        changeMin: e.currentTarget.querySelector("[name='changeMin']").value,
                        changeMax: e.currentTarget.querySelector("[name='changeMax']").value,
                    })
                );
                dispatch(closeModal());
            }}
        >
            <div className='extra-filters-container'>
                <div className='extra-filters-header'>
                    <h6>More Filters</h6>
                </div>
                <div className='content-divider'></div>
                <div className='extra-filters-inputs'>
                    <p className='input-header'>Market Cap Range</p>
                    <div className='extra-filters-input-container'>
                        <input type='number' min='0' max='999999999999' className='extra-filters-input' name='marketMin' placeholder='€0' />
                        <p>to</p>
                        <input type='number' min='0' max='999999999999' className='extra-filters-input' name='marketMax' placeholder='€999,999,999,999' />
                    </div>
                    <p className='input-header'>Price Range</p>
                    <div className='extra-filters-input-container'>
                        <input type='number' min='0' max='99999' className='extra-filters-input' name='priceMin' placeholder='€0' />
                        <p>to</p>
                        <input type='number' min='0' max='99999' className='extra-filters-input' name='priceMax' placeholder='€99,999' />
                    </div>
                    <p className='input-header'>Change Range</p>
                    <div className='extra-filters-input-container'>
                        <input type='number' min='-100' max='1000' className='extra-filters-input' name='changeMin' placeholder='-100%' />
                        <p>to</p>
                        <input type='number' min='-100' max='1000' className='extra-filters-input' name='changeMax' placeholder='1000%' />
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
