import React from 'react';
import { useSelector } from 'react-redux';
import { formatPriceBillion } from '../utils/formatPriceBillion';
import { formatNumber } from '../utils/formatNumber';

const MarketStats = () => {
    const { coin } = useSelector((store) => store.coin);

    return (
        <>
            <h5 className='market-stats-title'>Market Stats</h5>
            <div className='market-stats'>
                <div className='market-stats-numbers'>
                    <div className='market-stat'>
                        <p className='market-stat-title'>Market Cap</p>
                        <p className='market-stat-value'>{coin && coin.market_data && formatPriceBillion(coin.market_data.market_cap.eur)}</p>
                    </div>
                    <div className='market-stat'>
                        <p className='market-stat-title market-stat-right-column'>Fully Diluted Valuation</p>
                        <p className='market-stat-value market-stat-right-column'>{coin && coin.market_data && formatPriceBillion(coin.market_data.fully_diluted_valuation.eur)}</p>
                    </div>
                    <div className='market-stat'>
                        <p className='market-stat-title'>Circulating Supply</p>
                        <p className='market-stat-value'>{coin && coin.market_data && formatNumber(coin.market_data.circulating_supply)}</p>
                    </div>
                    <div className='market-stat'>
                        <p className='market-stat-title market-stat-right-column'>Total Supply</p>
                        <p className='market-stat-value market-stat-right-column'>{coin && coin.market_data && formatNumber(coin.market_data.total_supply)}</p>
                    </div>
                    <div className='market-stat'>
                        <p className='market-stat-title'>Total Volume</p>
                        <p className='market-stat-value'>{coin && coin.market_data && formatPriceBillion(coin.market_data.total_volume.eur)}</p>
                    </div>
                </div>
                <div className='content-divider'></div>
                <div className='market-stats-description'>
                    <h6>Bitcoin Price Update</h6>
                    <p>{coin && coin.description.en}</p>
                </div>
            </div>
        </>
    );
};

export default MarketStats;
