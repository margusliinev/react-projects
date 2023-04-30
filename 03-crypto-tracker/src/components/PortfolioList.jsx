import React from 'react';
import { PortfolioCoin, PortfolioSort } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import { clearCoins } from '../features/portfolio/portfolioSlice';

const PortfolioList = () => {
    const dispatch = useDispatch();
    const { sorted_portfolio } = useSelector((store) => store.portfolio);
    return (
        <>
            <div className='portfolio-list-header'>
                <h5>Your Coins</h5>
                <button type='button' className='clear-coins-btn' onClick={() => dispatch(clearCoins())}>
                    Clear Coins
                </button>
            </div>
            <div className='portfolio-list'>
                <PortfolioSort />
                <div className='portfolio-list-container'>
                    {sorted_portfolio.map((coin) => {
                        return <PortfolioCoin key={coin.id} coin={coin} />;
                    })}
                </div>
            </div>
        </>
    );
};
export default PortfolioList;
