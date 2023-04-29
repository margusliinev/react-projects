import React from 'react';
import { PortfolioCoin, PortfolioSort } from '../components';
import { useSelector } from 'react-redux';

const PortfolioList = () => {
    const { sorted_portfolio } = useSelector((store) => store.portfolio);
    return (
        <>
            <h5>Your Coins</h5>
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
