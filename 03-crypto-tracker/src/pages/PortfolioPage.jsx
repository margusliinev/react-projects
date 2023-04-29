import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PortfolioList, PortfolioTotals } from '../components';
import { sortPortfolio } from '../features/portfolio/portfolioSlice';

const PortfolioPage = () => {
    const dispatch = useDispatch();
    const { portfolio, sort } = useSelector((store) => store.portfolio);

    useEffect(() => {
        dispatch(sortPortfolio());
    }, [sort, portfolio]);

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
                    <PortfolioList />
                </div>
            </div>
        </main>
    );
};

export default PortfolioPage;
