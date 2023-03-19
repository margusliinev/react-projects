import React from 'react';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';

const CoinsSort = () => {
    return (
        <div className='coins-sort'>
            <button type='button' className='coins-sort-btn coins-sort-number'>
                <div className='sorting-arrows'>
                    <RxTriangleUp />
                    <RxTriangleDown />
                </div>
                <p>#</p>
            </button>
            <button type='button' className='coins-sort-btn coins-sort-name'>
                <div className='sorting-arrows'>
                    <RxTriangleUp />
                    <RxTriangleDown />
                </div>
                <p>Name</p>
            </button>
            <button type='button' className='coins-sort-btn coins-sort-growth'>
                <div className='sorting-arrows'>
                    <RxTriangleUp />
                    <RxTriangleDown />
                </div>
                <p>24h Change</p>
            </button>
            <button type='button' className='coins-sort-btn coins-sort-price'>
                <div className='sorting-arrows'>
                    <RxTriangleUp />
                    <RxTriangleDown />
                </div>
                <p>Price</p>
            </button>
            <button type='button' className='coins-sort-btn coins-sort-price-in-btc'>
                <div className='sorting-arrows'>
                    <RxTriangleUp />
                    <RxTriangleDown />
                </div>
                <p>Price in BTC</p>
            </button>
            <button type='button' className='coins-sort-btn coins-sort-market-cap'>
                <div className='sorting-arrows'>
                    <RxTriangleUp />
                    <RxTriangleDown />
                </div>
                <p>Market Cap</p>
            </button>
            <button type='button' className='coins-sort-btn coins-sort-low'>
                <div className='sorting-arrows'>
                    <RxTriangleUp />
                    <RxTriangleDown />
                </div>
                <p>24h Low</p>
            </button>
            <button type='button' className='coins-sort-btn coins-sort-high'>
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
