import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PortfolioList, PortfolioTotals } from '../components';
import { sortPortfolio } from '../features/portfolio/portfolioSlice';
import { Link } from 'react-router-dom';

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
                    <div className='empty-portfolio'>
                        <h3>Your Portfolio is empty</h3>
                        <Link to={'/coins'} className='btn fill-portfolio-btn'>
                            Track Coins
                        </Link>
                    </div>
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
