import React from 'react';
import { CgClose } from 'react-icons/cg';
import { formatPrice } from '../utils/formatPrice';

const PortfolioCoin = ({ coin }) => {
    return (
        <article className='portfolio-item' key={coin.id}>
            <div className='portfolio-coin-header'>
                <img src={coin.image} alt={coin.name} />
                <p>{coin.name.charAt(0).toUpperCase() + coin.name.slice(1)}</p>
                <p>({coin.symbol.toUpperCase()})</p>
                <button className='remove-coin-btn'>
                    <CgClose />
                </button>
            </div>
            <div className='portfolio-coin-stats'>
                <form className='portfolio-coin-stats-form'>
                    <div>
                        <input type='number' id='amount' placeholder='Amount' />
                        <input type='number' id='purchase-price' placeholder='Purchase Price' />
                    </div>
                    <button type='submit' className='apply-coin-data-btn'>
                        Apply
                    </button>
                </form>
                <div className='portfolio-coin-market'>
                    <div className='portfolio-coin-market-stats'>
                        <div className='portfolio-coin-stat'>
                            <p className='portfolio-coin-stat-title'>Price now:</p>
                            <p className='portfolio-coin-stat-value'>{formatPrice(coin.current_price)}</p>
                        </div>
                        <div className='portfolio-coin-stat'>
                            <p className='portfolio-coin-stat-title'>All time High:</p>
                            <p className='portfolio-coin-stat-value'>{formatPrice(coin.ath)}</p>
                        </div>
                        <div className='portfolio-coin-stat'>
                            <p className='portfolio-coin-stat-title'>Price 24h Change:</p>
                            <p className='portfolio-coin-stat-value'>{Math.abs(coin.price_change_percentage_24h.toFixed(2)) + '%'}</p>
                        </div>
                        <div className='portfolio-coin-stat'>
                            <p className='portfolio-coin-stat-title'>Circ/Total Sup:</p>
                            <p className='portfolio-coin-stat-value'>{Math.round((coin.circulating_supply / coin.total_supply) * 100) + '%'}</p>
                        </div>
                    </div>
                </div>
                <div className='portfolio-coin-user'>
                    <div className='portfolio-coin-user-stats'>
                        <div className='portfolio-coin-stat'>
                            <p className='portfolio-coin-stat-title'>Amount:</p>
                            <p className='portfolio-coin-stat-value'>1</p>
                        </div>
                        <div className='portfolio-coin-stat'>
                            <p className='portfolio-coin-stat-title'>Purchase Price:</p>
                            <p className='portfolio-coin-stat-value'>€22410</p>
                        </div>
                        <div className='portfolio-coin-stat'>
                            <p className='portfolio-coin-stat-title'>Price Since Purchase:</p>
                            <p className='portfolio-coin-stat-value'>9.04%</p>
                        </div>
                        <div className='portfolio-coin-stat'>
                            <p className='portfolio-coin-stat-title'>Gained Profit</p>
                            <p className='portfolio-coin-stat-value'>€2410</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='portfolio-content-divider'></div>
        </article>
    );
};
export default PortfolioCoin;
