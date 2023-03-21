import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoins } from '../features/coins/coinsSlice';
import { Loader } from '../components';
import { formatPrice } from '../utils/formatPrice';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';

const MarketInfo = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCoins());
    }, []);

    const { coins_loading, coins_error, coins, btc } = useSelector((store) => store.coins);
    const { market_cap_change_percentage_24h } = btc;

    const totalMarketCap = coins.reduce((acc, cur) => {
        acc = acc + cur.market_cap;
        return acc;
    }, 0);

    const totalMarketCapVolume = coins.reduce((acc, cur) => {
        acc = acc + cur.total_volume;
        return acc;
    }, 0);

    if (coins_loading) {
        return <Loader />;
    }

    if (coins_error) {
        return;
    }

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
            <div className={market_cap_change_percentage_24h > 0 ? 'market-info-box box-green' : 'market-info-box box-red'}>
                <p className='info-box-title'>Bitcoin Price 24h</p>
                <p className='info-box-value'>
                    {`${Math.abs(market_cap_change_percentage_24h)}%`} <span className={market_cap_change_percentage_24h > 0 ? 'value-green' : 'value-red'}>{market_cap_change_percentage_24h > 0 ? <RxTriangleUp /> : <RxTriangleDown />}</span>
                </p>
            </div>
        </div>
    );
};

export default MarketInfo;
