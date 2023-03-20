import React from 'react';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import { useSelector, useDispatch } from 'react-redux';
import { updateSort } from '../features/coins/coinsSlice';

const CoinsSort = () => {
    const { sort } = useSelector((store) => store.coins);
    const dispatch = useDispatch();
    return (
        <div className='coins-sort'>
            <button type='button' className='coins-sort-btn coins-sort-number' value={sort === 'number-low' ? 'number-high' : 'number-low'} onClick={(e) => dispatch(updateSort(e.currentTarget.value))}>
                <div className='sorting-arrows'>
                    <RxTriangleUp />
                    <RxTriangleDown />
                </div>
                <p>#</p>
            </button>
            <button type='button' className='coins-sort-btn coins-sort-name' value={sort === 'name-a-z' ? 'name-z-a' : 'name-a-z'} onClick={(e) => dispatch(updateSort(e.currentTarget.value))}>
                <div className='sorting-arrows'>
                    <RxTriangleUp />
                    <RxTriangleDown />
                </div>
                <p>Name</p>
            </button>
            <button type='button' className='coins-sort-btn coins-sort-growth' value={sort === 'growth-low' ? 'growth-high' : 'growth-low'} onClick={(e) => dispatch(updateSort(e.currentTarget.value))}>
                <div className='sorting-arrows'>
                    <RxTriangleUp />
                    <RxTriangleDown />
                </div>
                <p>24h Change</p>
            </button>
            <button type='button' className='coins-sort-btn coins-sort-price' value={sort === 'price-low' ? 'price-high' : 'price-low'} onClick={(e) => dispatch(updateSort(e.currentTarget.value))}>
                <div className='sorting-arrows'>
                    <RxTriangleUp />
                    <RxTriangleDown />
                </div>
                <p>Price</p>
            </button>
            <button type='button' className='coins-sort-btn coins-sort-price-in-btc' value={sort === 'price-btc-low' ? 'price-btc-high' : 'price-btc-low'} onClick={(e) => dispatch(updateSort(e.currentTarget.value))}>
                <div className='sorting-arrows'>
                    <RxTriangleUp />
                    <RxTriangleDown />
                </div>
                <p>Price in BTC</p>
            </button>
            <button type='button' className='coins-sort-btn coins-sort-market-cap' value={sort === 'marketCap-low' ? 'marketCap-high' : 'marketCap-low'} onClick={(e) => dispatch(updateSort(e.currentTarget.value))}>
                <div className='sorting-arrows'>
                    <RxTriangleUp />
                    <RxTriangleDown />
                </div>
                <p>Market Cap</p>
            </button>
            <button type='button' className='coins-sort-btn coins-sort-low' value={sort === 'priceLow-low' ? 'priceLow-high' : 'priceLow-low'} onClick={(e) => dispatch(updateSort(e.currentTarget.value))}>
                <div className='sorting-arrows'>
                    <RxTriangleUp />
                    <RxTriangleDown />
                </div>
                <p>24h Low</p>
            </button>
            <button type='button' className='coins-sort-btn coins-sort-high' value={sort === 'priceHigh-low' ? 'priceHigh-high' : 'priceHigh-low'} onClick={(e) => dispatch(updateSort(e.currentTarget.value))}>
                <div className='sorting-arrows'>
                    <RxTriangleUp />
                    <RxTriangleDown />
                </div>
                <p>24h High</p>
            </button>
            <button type='button' className='coins-sort-btn coins-sort-track'>
                <p>Track</p>
            </button>
        </div>
    );
};

export default CoinsSort;
