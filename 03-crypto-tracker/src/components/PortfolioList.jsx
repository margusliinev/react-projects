import React from 'react';
import { PortfolioCoin, PortfolioSort } from '../components';
import { useSelector } from 'react-redux';

const PortfolioList = () => {
    const { portfolio } = useSelector((store) => store.portfolio);
    return (
        <div className='portfolio-list'>
            <h5>Your Coins</h5>
            <PortfolioSort />
            {portfolio.map((coin) => {
                return <PortfolioCoin key={coin.id} coin={coin} />;
            })}
        </div>
    );
};
export default PortfolioList;
