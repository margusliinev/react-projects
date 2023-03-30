import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../features/navigation/navigationSlice';
import { updateExtraFilters, removeFilter } from '../features/coins/coinsSlice';
import { CgClose } from 'react-icons/cg';

const ExtraFilters = () => {
    const { isModalOpen } = useSelector((store) => store.navigation);
    const { filters, marketFilter, priceFilter, changeFilter } = useSelector((store) => store.coins);
    const { marketMin, marketMax, priceMin, priceMax, changeMin, changeMax } = filters;
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
            }}
        >
            <div className='extra-filters-container'>
                <div className='extra-filters-header'>
                    <h6>More Filters</h6>
                </div>
                <div className='content-divider'></div>
                <div className='extra-filters-inputs'>
                    <p className='input-header'>
                        Market Cap Range{' '}
                        {marketFilter ? (
                            <>
                                -<span className='active'> Active</span>{' '}
                            </>
                        ) : null}
                    </p>
                    <div className='extra-filters-input-container'>
                        <div>
                            <input type='number' min='0' max='999999999999' className='extra-filters-input' name='marketMin' placeholder='€0' disabled={marketFilter ? true : false} />
                            <p>to</p>
                            <input type='number' min='0' max='999999999999' className='extra-filters-input' name='marketMax' placeholder='€999,999,999,999' disabled={marketFilter ? true : false} />
                        </div>
                        <div className={marketFilter ? 'current-filter-container show-current-filter-container' : 'current-filter-container'}>
                            <span className='current-filter'>{`€${marketMin} - €${marketMax}`}</span>
                            <button
                                className='remove-filter-btn'
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.currentTarget.parentElement.previousElementSibling.firstElementChild.value = '';
                                    e.currentTarget.parentElement.previousElementSibling.firstElementChild.nextElementSibling.nextElementSibling.value = '';
                                    dispatch(removeFilter('marketFilter'));
                                }}
                            >
                                <CgClose />
                            </button>
                        </div>
                    </div>
                    <p className='input-header'>
                        Price Range{' '}
                        {priceFilter ? (
                            <>
                                -<span className='active'> Active</span>{' '}
                            </>
                        ) : null}
                    </p>
                    <div className='extra-filters-input-container'>
                        <div>
                            <input type='number' min='0' max='99999' className='extra-filters-input' name='priceMin' placeholder='€0' disabled={priceFilter ? true : false} />
                            <p>to</p>
                            <input type='number' min='0' max='99999' className='extra-filters-input' name='priceMax' placeholder='€99,999' disabled={priceFilter ? true : false} />
                        </div>
                        <div className={priceFilter ? 'current-filter-container show-current-filter-container' : 'current-filter-container'}>
                            <span className='current-filter'>{`€${priceMin} - €${priceMax}`}</span>
                            <button
                                className='remove-filter-btn'
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.currentTarget.parentElement.previousElementSibling.firstElementChild.value = '';
                                    e.currentTarget.parentElement.previousElementSibling.firstElementChild.nextElementSibling.nextElementSibling.value = '';
                                    dispatch(removeFilter('priceFilter'));
                                }}
                            >
                                <CgClose />
                            </button>
                        </div>
                    </div>
                    <p className='input-header'>
                        Change Range{' '}
                        {changeFilter ? (
                            <>
                                -<span className='active'> Active</span>{' '}
                            </>
                        ) : null}
                    </p>
                    <div className='extra-filters-input-container'>
                        <div>
                            <input type='number' min='-100' max='1000' className='extra-filters-input' name='changeMin' placeholder='-100%' disabled={changeFilter ? true : false} />
                            <p>to</p>
                            <input type='number' min='-100' max='1000' className='extra-filters-input' name='changeMax' placeholder='1000%' disabled={changeFilter ? true : false} />
                        </div>
                        <div className={changeFilter ? 'current-filter-container show-current-filter-container' : 'current-filter-container'}>
                            <span className='current-filter'>{`€${changeMin} - €${changeMax}`}</span>
                            <button
                                className='remove-filter-btn'
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.currentTarget.parentElement.previousElementSibling.firstElementChild.value = '';
                                    e.currentTarget.parentElement.previousElementSibling.firstElementChild.nextElementSibling.nextElementSibling.value = '';
                                    dispatch(removeFilter('changeFilter'));
                                }}
                            >
                                <CgClose />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='content-divider'></div>
                <div className='extra-filters-buttons'>
                    <button type='button' className='close-button' onClick={() => dispatch(closeModal())}>
                        Close
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
