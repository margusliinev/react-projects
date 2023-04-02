import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../utils/formatPrice';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';

const MarketInfo = () => {
    const { featured } = useSelector((store) => store.featured);
    const { bitcoin, ethereum, tether } = featured;

    return (
        <div className='market-info'>
            <div className={bitcoin && bitcoin.eur_24h_change > 0 ? 'market-info-box box-green' : 'market-info-box box-red'}>
                <p className='info-box-title'>Bitcoin</p>
                <div>
                    <p className='info-box-value'>{bitcoin && bitcoin ? formatPrice(bitcoin && bitcoin.eur_market_cap) : 0 + '€'}</p>
                    <div className={bitcoin && bitcoin.eur_24h_change > 0 ? 'info-box-change-value bright-box-green value-green' : 'info-box-change-value bright-box-red value-red'}>
                        {bitcoin && bitcoin.eur_24h_change > 0 ? <RxTriangleUp /> : <RxTriangleDown />}
                        <p className={bitcoin && bitcoin.eur_24h_change > 0 ? 'value-green' : 'value-red'}>{bitcoin ? Math.abs(bitcoin.eur_24h_change.toFixed(2)) + '%' : 0 + '%'}</p>
                    </div>
                </div>
            </div>
            <div className={ethereum && ethereum.eur_24h_change > 0 ? 'market-info-box box-green' : 'market-info-box box-red'}>
                <p className='info-box-title'>Ethereum</p>
                <div>
                    <p className='info-box-value'>{ethereum && ethereum ? formatPrice(ethereum && ethereum.eur_market_cap) : 0 + '€'}</p>
                    <div className={ethereum && ethereum.eur_24h_change > 0 ? 'info-box-change-value bright-box-green value-green' : 'info-box-change-value bright-box-red value-red'}>
                        {ethereum && ethereum.eur_24h_change > 0 ? <RxTriangleUp /> : <RxTriangleDown />}
                        <p className={ethereum && ethereum.eur_24h_change > 0 ? 'value-green' : 'value-red'}>{ethereum ? Math.abs(ethereum.eur_24h_change.toFixed(2)) + '%' : 0 + '%'}</p>
                    </div>
                </div>
            </div>
            <div className={tether && tether.eur_24h_change > 0 ? 'market-info-box box-green' : 'market-info-box box-red'}>
                <p className='info-box-title'>Tether</p>
                <div>
                    <p className='info-box-value'>{tether && tether ? formatPrice(tether && tether.eur_market_cap) : 0 + '€'}</p>
                    <div className={tether && tether.eur_24h_change > 0 ? 'info-box-change-value bright-box-green value-green' : 'info-box-change-value bright-box-red value-red'}>
                        {tether && tether.eur_24h_change > 0 ? <RxTriangleUp /> : <RxTriangleDown />}
                        <p className={tether && tether.eur_24h_change > 0 ? 'value-green' : 'value-red'}>{tether ? Math.abs(tether.eur_24h_change.toFixed(2)) + '%' : 0 + '%'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketInfo;
