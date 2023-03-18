import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../components';
import { formatPrice } from '../utils/formatPrice';
import { formatPriceBillion } from '../utils/formatPriceBillion';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import { HiPlus } from 'react-icons/hi';

const CoinsList = () => {
    const { coins_loading, coins_error, coins } = useSelector((store) => store.coins);
    console.log(coins);

    if (coins_loading) {
        return <Loader />;
    }

    if (coins_error) {
        return;
    }

    return (
        <div className='coins-list'>
            {coins.map((coin, index) => {
                return (
                    <article key={index} className='coin'>
                        <p className='coin-number'>{index + 1}</p>
                        <div className='coin-name'>
                            <img className='coin-image' src={coin.image} alt={coin.name} />
                            <p>{coin.name}</p>
                        </div>
                        <div className={coin.market_cap_change_percentage_24h > 0 ? 'coin-growth box-green value-green' : 'coin-growth box-red value-red'}>
                            {coin.market_cap_change_percentage_24h > 0 ? <RxTriangleUp /> : <RxTriangleDown />}
                            <span>{`${Math.abs(coin.market_cap_change_percentage_24h.toFixed(2))}%`}</span>
                        </div>
                        <p className='coin-price'>{formatPrice(coin.current_price)}</p>
                        <p className='coin-price-btc'>{(coin.current_price / coins[0].current_price).toFixed(8)}</p>
                        <p className='coin-market-cap'>{formatPriceBillion(coin.market_cap)}</p>
                        <p className='coin-price-low'>{formatPrice(coin.low_24h)}</p>
                        <p className='coin-price-high'>{formatPrice(coin.high_24h)}</p>
                        <button type='button' className='add-to-tracker'>
                            <HiPlus />
                        </button>
                    </article>
                );
            })}
        </div>
    );
};

export default CoinsList;
