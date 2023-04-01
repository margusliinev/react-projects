import React from 'react';
import { useSelector } from 'react-redux';

const MarketInfo = () => {
    const { global } = useSelector((store) => store.global);
    const { market_cap_percentage } = global;

    return (
        <div className='market-info'>
            <div className='market-info-box'>
                <p className='info-box-title'>Bitcoin</p>
                <p className='info-box-value'>{market_cap_percentage ? market_cap_percentage.btc.toFixed(2) + '%' : 0 + '%'}</p>
            </div>
            <div className='market-info-box'>
                <p className='info-box-title'>Ethereum</p>
                <p className='info-box-value'>{market_cap_percentage ? market_cap_percentage.eth.toFixed(2) + '%' : 0 + '%'}</p>
            </div>
            <div className='market-info-box'>
                <p className='info-box-title'>Tether</p>
                <p className='info-box-value'>{market_cap_percentage ? market_cap_percentage.usdt.toFixed(2) + '%' : 0 + '%'}</p>
            </div>
        </div>
    );
};

export default MarketInfo;
