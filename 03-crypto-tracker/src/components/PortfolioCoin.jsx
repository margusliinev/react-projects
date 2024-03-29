import React from 'react';
import { useDispatch } from 'react-redux';
import { formatPrice } from '../utils/formatPrice';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { changeCoinAmount } from '../features/portfolio/portfolioSlice';
import { Link } from 'react-router-dom';

const PortfolioCoin = ({ coin }) => {
    const dispatch = useDispatch();
    return (
        <Link to={`/coins/${coin.id}`} className='portfolio-item' key={coin.id}>
            <p className='portfolio-number'>{coin.number}</p>
            <div className='portfolio-name'>
                <img className='portfolio-image' src={coin.image ? coin.image : coin.image.small} alt={coin.name} />
                <p>{coin.name.substring(0, 18)}</p>
            </div>
            <p className='portfolio-symbol'>{coin.symbol.toUpperCase()}</p>
            <p className='portfolio-price'>{formatPrice(coin.current_price)}</p>
            <div className={coin.price_change_percentage_24h > 0 ? 'portfolio-price-change box-green value-green' : 'portfolio-price-change box-red value-red'}>
                {coin.price_change_percentage_24h > 0 ? <RxTriangleUp /> : <RxTriangleDown />}
                <span>{`${Math.abs(coin.price_change_percentage_24h).toFixed(2)}%`}</span>
            </div>
            <p className='portfolio-market'>{formatPrice(coin.market_cap)}</p>
            <div className={coin.market_cap_change_percentage_24h > 0 ? 'portfolio-market-change box-green value-green' : 'portfolio-market-change box-red value-red'}>
                {coin.market_cap_change_percentage_24h > 0 ? <RxTriangleUp /> : <RxTriangleDown />}
                <span>{`${Math.abs(coin.market_cap_change_percentage_24h).toFixed(2)}%`}</span>
            </div>
            <p className='portfolio-ath'>{formatPrice(coin.ath)}</p>
            <div className='portfolio-item-amount'>
                <button
                    type='button'
                    className='decrease-amount-button'
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(changeCoinAmount({ id: coin.id, value: 'dec' }));
                    }}
                >
                    <HiMinus />
                </button>
                <p>{coin.amount}</p>
                <button
                    type='button'
                    className='increase-amount-button'
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(changeCoinAmount({ id: coin.id, value: 'inc' }));
                    }}
                >
                    <HiPlus />
                </button>
            </div>
        </Link>
    );
};
export default PortfolioCoin;
