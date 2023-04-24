import React from 'react';
import { useSelector } from 'react-redux';
import { formatPriceBillion } from '../utils/formatPriceBillion';
import { formatPrice } from '../utils/formatPrice';
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
                        <p className='market-stat-value'>{coin && coin.market_data && formatPriceBillion(coin.market_data.market_cap.eur) ? formatPriceBillion(coin.market_data.market_cap.eur) : 0}</p>
                    </div>
                    <div className='market-stat'>
                        <p className='market-stat-title market-stat-right-column'>Fully Diluted Valuation</p>
                        <p className='market-stat-value market-stat-right-column'>{coin && coin.market_data && formatPriceBillion(coin.market_data.fully_diluted_valuation.eur) ? formatPriceBillion(coin.market_data.fully_diluted_valuation.eur) : 0}</p>
                    </div>
                    <div className='market-stat'>
                        <p className='market-stat-title'>Circulating Supply</p>
                        <p className='market-stat-value'>{coin && coin.market_data && formatNumber(coin.market_data.circulating_supply) ? formatNumber(coin.market_data.circulating_supply) : 0}</p>
                    </div>
                    <div className='market-stat'>
                        <p className='market-stat-title market-stat-right-column'>Total Supply</p>
                        <p className='market-stat-value market-stat-right-column'>{coin && coin.market_data && formatNumber(coin.market_data.total_supply) ? formatNumber(coin.market_data.total_supply) : 0}</p>
                    </div>
                    <div className='market-stat'>
                        <p className='market-stat-title'>Total Volume</p>
                        <p className='market-stat-value'>{coin && coin.market_data && formatPriceBillion(coin.market_data.total_volume.eur) ? formatPriceBillion(coin.market_data.total_volume.eur) : 0}</p>
                    </div>
                </div>
                <div className='content-divider'></div>
                <div className='market-stats-description'>
                    <h6>{coin.name} Price Update</h6>
                    <p>{`${coin.name} price is ${coin && formatPrice(coin && coin.market_data && coin.market_data.current_price.eur)}, ${coin && coin.market_data && coin.market_data.price_change_percentage_24h < 0 ? `down ${coin && coin.market_data && coin.market_data.price_change_percentage_24h && coin.market_data.price_change_percentage_24h.toFixed(2)}%` : `up ${coin && coin.market_data && coin.market_data.price_change_percentage_24h && coin.market_data.price_change_percentage_24h.toFixed(2)}%`} in the last 24 hours, and the live market cap is ${formatPriceBillion(coin && coin.market_data && coin.market_data.market_cap.eur)}. It has circulating supply volume of ${formatNumber(coin && coin.market_data && coin.market_data.circulating_supply)} ${coin && coin.symbol && coin.symbol.toUpperCase()} coins and a max supply volume of ${formatNumber(coin && coin.market_data && coin.market_data.total_supply)} coins.`}</p>
                </div>
            </div>
        </>
    );
};

export default MarketStats;
