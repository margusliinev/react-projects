import React from 'react';
import { useSelector } from 'react-redux';
import { PortfolioList, PortfolioTotals } from '../components';

const PortfolioPage = () => {
    const { portfolio } = useSelector((store) => store.portfolio);

    if (portfolio.length < 1) {
        return (
            <main className='portfolio'>
                <div className='portfolio-container'>
                    <h4>Portfolio is empty</h4>
                </div>
            </main>
        );
    }

    return (
        <main className='portfolio'>
            <div className='portfolio-container'>
                <div className='totals'>
                    <h5>Your Portfolio</h5>
                    <PortfolioTotals />
                </div>
                <div className='assets'>
                    <h5>Your Coins</h5>
                    <div className='portfolio-content-divider'></div>
                    <PortfolioList />
                </div>
            </div>
        </main>
    );
};

export default PortfolioPage;
