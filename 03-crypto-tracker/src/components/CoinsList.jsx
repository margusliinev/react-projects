import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../utils/formatPrice';
import { formatPriceBillion } from '../utils/formatPriceBillion';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import { HiPlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const CoinsList = () => {
    const { btc, filtered_coins, displayed_coins } = useSelector((store) => store.coins);

    if (filtered_coins.length < 1) {
        return <h3 className='filter-error'>No coins matched your search...</h3>;
    }

    return (
        <div className='coins-list'>
            {displayed_coins
                ? displayed_coins.map((coin, index) => {
                      return (
                          <Link to={`/coins/${coin.id}`} key={index} className='coin'>
                              <p className='coin-number'>{coin.number}</p>
                              <div className='coin-name'>
                                  <img className='coin-image' src={coin.image} alt={coin.name} />
                                  <p>{coin.name.substring(0, 18)}</p>
                              </div>
                              <div className={coin.market_cap_change_percentage_24h > 0 ? 'coin-growth box-green value-green' : 'coin-growth box-red value-red'}>
                                  {coin.market_cap_change_percentage_24h > 0 ? <RxTriangleUp /> : <RxTriangleDown />}
                                  <span>{`${Math.abs(coin.market_cap_change_percentage_24h).toFixed(2)}%`}</span>
                              </div>
                              <p className='coin-price'>{formatPrice(coin.current_price)}</p>
                              <p className='coin-price-btc'>{(coin.current_price / btc.current_price).toFixed(8)}</p>
                              <p className='coin-market-cap'>{formatPriceBillion(coin.market_cap)}</p>
                              <p className='coin-price-low'>{formatPrice(coin.low_24h)}</p>
                              <p className='coin-price-high'>{formatPrice(coin.high_24h)}</p>
                              <button type='button' className='coin-track'>
                                  <HiPlus />
                              </button>
                          </Link>
                      );
                  })
                : null}
        </div>
    );
};

export default CoinsList;
