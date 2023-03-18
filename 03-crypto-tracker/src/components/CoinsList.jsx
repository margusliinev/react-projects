import React from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../components';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';

const CoinsList = () => {
    const { coins_loading, coins_error, coins } = useSelector((store) => store.coins);
    console.log(coins);
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
                        <div className={coin.market_cap_change_percentage_24h > 0 ? 'coin-growth box-green' : 'coin-growth box-red'}>
                            {coin.market_cap_change_percentage_24h > 0 ? <RxTriangleUp /> : <RxTriangleDown />}
                            <span>{`${Math.abs(coin.market_cap_change_percentage_24h.toFixed(2))}%`}</span>
                        </div>
                        <p className='coin-price'>{`€${coin.current_price}`}</p>
                    </article>
                );
            })}
        </div>
    );
};

export default CoinsList;
