import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../utils/formatPrice';
import { formatNumber } from '../utils/formatNumber';

const PortfolioTotals = () => {
    const { portfolio } = useSelector((store) => store.portfolio);
    const balance = portfolio.reduce((total, current) => {
        total = total + current.current_price * current.amount;
        return total;
    }, 0);
    const balanceChange = portfolio.reduce((total, current) => {
        console.log(current.price_change_percentage_24h);
        total = total + current.price_change_percentage_24h;
        return total / portfolio.length;
    }, 0);
    const uniqueCoins = portfolio.length;
    return (
        <div className='portfolio-totals'>
            <div className='totals-stat'>
                <p>Total Balance:</p>
                <p>{formatPrice(balance)}</p>
            </div>
            <div className='totals-stat'>
                <p>24h Portfolio Change:</p>
                <p>{formatNumber(balanceChange) + '%'}</p>
            </div>
            <div className='totals-stat'>
                <p>Total Unique Coins:</p>
                <p>{uniqueCoins}</p>
            </div>
        </div>
    );
};
export default PortfolioTotals;
