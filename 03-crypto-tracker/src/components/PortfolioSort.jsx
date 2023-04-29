import React from 'react';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import { useSelector, useDispatch } from 'react-redux';
import { updateSort } from '../features/portfolio/portfolioSlice';

const PortfolioSort = () => {
    const dispatch = useDispatch();
    const { sort } = useSelector((store) => store.portfolio);

    return (
        <div className='portfolio-sort'>
            <button type='button' className='coins-sort-btn portfolio-sort-number' value={sort === 'number-low' ? 'number-high' : 'number-low'} onClick={(e) => dispatch(updateSort(e.currentTarget.value))}>
                <div className='sorting-arrows'>
                    <RxTriangleUp className={sort === 'number-high' ? 'active-sort' : null} />
                    <RxTriangleDown className={sort === 'number-low' ? 'active-sort' : null} />
                </div>
                <p>#</p>
            </button>
            <button type='button' className='coins-sort-btn portfolio-sort-name' value={sort === 'name-a-z' ? 'name-z-a' : 'name-a-z'} onClick={(e) => dispatch(updateSort(e.currentTarget.value))}>
                <div className='sorting-arrows'>
                    <RxTriangleUp className={sort === 'name-z-a' ? 'active-sort' : null} />
                    <RxTriangleDown className={sort === 'name-a-z' ? 'active-sort' : null} />
                </div>
                <p>Name</p>
            </button>
            <button type='button' className='coins-sort-btn portfolio-sort-symbol' value={sort === 'symbol-a-z' ? 'symbol-z-a' : 'symbol-a-z'} onClick={(e) => dispatch(updateSort(e.currentTarget.value))}>
                <div className='sorting-arrows'>
                    <RxTriangleUp className={sort === 'symbol-z-a' ? 'active-sort' : null} />
                    <RxTriangleDown className={sort === 'symbol-a-z' ? 'active-sort' : null} />
                </div>
                <p>Symbol</p>
            </button>
            <button type='button' className='coins-sort-btn portfolio-sort-price' value={sort === 'price-low' ? 'price-high' : 'price-low'} onClick={(e) => dispatch(updateSort(e.currentTarget.value))}>
                <div className='sorting-arrows'>
                    <RxTriangleUp className={sort === 'price-high' ? 'active-sort' : null} />
                    <RxTriangleDown className={sort === 'price-low' ? 'active-sort' : null} />
                </div>
                <p>Price</p>
            </button>
            <button type='button' className='coins-sort-btn portfolio-sort-price-change' value={sort === 'price-change-low' ? 'price-change-high' : 'price-change-low'} onClick={(e) => dispatch(updateSort(e.currentTarget.value))}>
                <div className='sorting-arrows'>
                    <RxTriangleUp className={sort === 'price-change-high' ? 'active-sort' : null} />
                    <RxTriangleDown className={sort === 'price-change-low' ? 'active-sort' : null} />
                </div>
                <p>Price 24h</p>
            </button>
            <button type='button' className='coins-sort-btn portfolio-sort-market' value={sort === 'market-low' ? 'market-high' : 'market-low'} onClick={(e) => dispatch(updateSort(e.currentTarget.value))}>
                <div className='sorting-arrows'>
                    <RxTriangleUp className={sort === 'market-high' ? 'active-sort' : null} />
                    <RxTriangleDown className={sort === 'market-low' ? 'active-sort' : null} />
                </div>
                <p>Market Cap</p>
            </button>
            <button type='button' className='coins-sort-btn portfolio-sort-market-change' value={sort === 'market-change-low' ? 'market-change-high' : 'market-change-low'} onClick={(e) => dispatch(updateSort(e.currentTarget.value))}>
                <div className='sorting-arrows'>
                    <RxTriangleUp className={sort === 'market-change-high' ? 'active-sort' : null} />
                    <RxTriangleDown className={sort === 'market-change-low' ? 'active-sort' : null} />
                </div>
                <p>Market 24h</p>
            </button>
            <button type='button' className='coins-sort-btn portfolio-sort-ath' value={sort === 'ath-low' ? 'ath-high' : 'ath-low'} onClick={(e) => dispatch(updateSort(e.currentTarget.value))}>
                <div className='sorting-arrows'>
                    <RxTriangleUp className={sort === 'ath-high' ? 'active-sort' : null} />
                    <RxTriangleDown className={sort === 'ath-low' ? 'active-sort' : null} />
                </div>
                <p>Ath</p>
            </button>
            <button type='button' className='coins-sort-btn portfolio-sort-amount'>
                <p>Amount</p>
            </button>
        </div>
    );
};
export default PortfolioSort;
