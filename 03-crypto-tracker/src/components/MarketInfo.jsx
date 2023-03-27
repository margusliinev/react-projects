import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../utils/formatPrice';

const MarketInfo = () => {
    const { coins } = useSelector((store) => store.coins);
    const { global } = useSelector((store) => store.global);
    const { market_cap_percentage } = global;

    const totalMarketCap = coins.reduce((acc, cur) => {
        acc = acc + cur.market_cap;
        return acc;
    }, 0);

    const totalMarketCapVolume = coins.reduce((acc, cur) => {
        acc = acc + cur.total_volume;
        return acc;
    }, 0);

    return (
        <div className='market-info'>
            <div className='market-info-box'>
                <p className='info-box-title'>Market Cap</p>
                <p className='info-box-value'>{formatPrice(totalMarketCap)}</p>
            </div>
            <div className='market-info-box'>
                <p className='info-box-title'>Volume 24h</p>
                <p className='info-box-value'>{formatPrice(totalMarketCapVolume)}</p>
            </div>
            <div className='market-info-box'>
                <p className='info-box-title'>Bitcoin Dominance</p>
                <p className='info-box-value'>{market_cap_percentage ? market_cap_percentage.btc.toFixed(2) + '%' : 0 + '%'}</p>
            </div>
        </div>
    );
};

export default MarketInfo;
