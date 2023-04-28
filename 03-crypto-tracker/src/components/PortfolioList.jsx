import React from 'react';
import { PortfolioCoin } from '../components';
import { useSelector } from 'react-redux';

const PortfolioList = () => {
    const { portfolio } = useSelector((store) => store.portfolio);
    return (
        <div className='portfolio-list'>
            {portfolio.map((coin) => {
                return <PortfolioCoin key={coin.id} coin={coin} />;
            })}
        </div>
    );
};
export default PortfolioList;
