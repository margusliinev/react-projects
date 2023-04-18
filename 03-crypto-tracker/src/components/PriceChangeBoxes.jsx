import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';

const PriceChangeBoxes = () => {
    const dispatch = useDispatch();
    const { coin } = useSelector((store) => store.coin);

    return (
        <div className='price-change-boxes'>
            <div className='price-change-box'>
                <span className='price-change-title'>1H</span>
                <div className={coin && coin.market_data && coin.market_data.price_change_percentage_1h_in_currency.eur > 0 ? 'coins-box-change-value bright-box-green value-green' : 'coins-box-change-value bright-box-red value-red'}>
                    {coin && coin.market_data && coin.market_data.price_change_percentage_1h_in_currency.eur > 0 ? <RxTriangleUp /> : <RxTriangleDown />}
                    <p className={coin && coin.market_data && coin.market_data.price_change_percentage_1h_in_currency.eur > 0 ? 'value-green' : 'value-red'}>{coin ? Math.abs(coin.market_data && coin.market_data.price_change_percentage_1h_in_currency.eur.toFixed(2)) + '%' : 0 + '%'}</p>
                </div>
            </div>
            <div className='price-change-box'>
                <span className='price-change-title'>24H</span>
                <div className={coin && coin.market_data && coin.market_data.price_change_percentage_24h_in_currency.eur > 0 ? 'coins-box-change-value bright-box-green value-green' : 'coins-box-change-value bright-box-red value-red'}>
                    {coin && coin.market_data && coin.market_data.price_change_percentage_24h_in_currency.eur > 0 ? <RxTriangleUp /> : <RxTriangleDown />}
                    <p className={coin && coin.market_data && coin.market_data.price_change_percentage_24h_in_currency.eur > 0 ? 'value-green' : 'value-red'}>{coin ? Math.abs(coin.market_data && coin.market_data.price_change_percentage_24h_in_currency.eur.toFixed(2)) + '%' : 0 + '%'}</p>
                </div>
            </div>
            <div className='price-change-box'>
                <span className='price-change-title'>7D</span>
                <div className={coin && coin.market_data && coin.market_data.price_change_percentage_7d_in_currency.eur > 0 ? 'coins-box-change-value bright-box-green value-green' : 'coins-box-change-value bright-box-red value-red'}>
                    {coin && coin.market_data && coin.market_data.price_change_percentage_7d_in_currency.eur > 0 ? <RxTriangleUp /> : <RxTriangleDown />}
                    <p className={coin && coin.market_data && coin.market_data.price_change_percentage_7d_in_currency.eur > 0 ? 'value-green' : 'value-red'}>{coin ? Math.abs(coin.market_data && coin.market_data.price_change_percentage_7d_in_currency.eur.toFixed(2)) + '%' : 0 + '%'}</p>
                </div>
            </div>
            <div className='price-change-box'>
                <span className='price-change-title'>14D</span>
                <div className={coin && coin.market_data && coin.market_data.price_change_percentage_14d_in_currency.eur > 0 ? 'coins-box-change-value bright-box-green value-green' : 'coins-box-change-value bright-box-red value-red'}>
                    {coin && coin.market_data && coin.market_data.price_change_percentage_14d_in_currency.eur > 0 ? <RxTriangleUp /> : <RxTriangleDown />}
                    <p className={coin && coin.market_data && coin.market_data.price_change_percentage_14d_in_currency.eur > 0 ? 'value-green' : 'value-red'}>{coin ? Math.abs(coin.market_data && coin.market_data.price_change_percentage_14d_in_currency.eur.toFixed(2)) + '%' : 0 + '%'}</p>
                </div>
            </div>
            <div className='price-change-box'>
                <span className='price-change-title'>30D</span>
                <div className={coin && coin.market_data && coin.market_data.price_change_percentage_30d_in_currency.eur > 0 ? 'coins-box-change-value bright-box-green value-green' : 'coins-box-change-value bright-box-red value-red'}>
                    {coin && coin.market_data && coin.market_data.price_change_percentage_30d_in_currency.eur > 0 ? <RxTriangleUp /> : <RxTriangleDown />}
                    <p className={coin && coin.market_data && coin.market_data.price_change_percentage_30d_in_currency.eur > 0 ? 'value-green' : 'value-red'}>{coin ? Math.abs(coin.market_data && coin.market_data.price_change_percentage_30d_in_currency.eur.toFixed(2)) + '%' : 0 + '%'}</p>
                </div>
            </div>
            <div className='price-change-box'>
                <span className='price-change-title'>1Y</span>
                <div className={coin && coin.market_data && coin.market_data.price_change_percentage_1y_in_currency.eur > 0 ? 'coins-box-change-value bright-box-green value-green' : 'coins-box-change-value bright-box-red value-red'}>
                    {coin && coin.market_data && coin.market_data.price_change_percentage_1y_in_currency.eur > 0 ? <RxTriangleUp /> : <RxTriangleDown />}
                    <p className={coin && coin.market_data && coin.market_data.price_change_percentage_1y_in_currency.eur > 0 ? 'value-green' : 'value-red'}>{coin ? Math.abs(coin.market_data && coin.market_data.price_change_percentage_1y_in_currency.eur.toFixed(2)) + '%' : 0 + '%'}</p>
                </div>
            </div>
        </div>
    );
};

export default PriceChangeBoxes;
