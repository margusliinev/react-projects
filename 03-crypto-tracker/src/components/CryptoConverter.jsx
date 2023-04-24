import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logoEur from '../assets/logoEur.png';
import { updateValue } from '../features/coin/coinSlice';

const CryptoConverter = () => {
    const dispatch = useDispatch();
    const { coin, coin_value, currency_value } = useSelector((store) => store.coin);
    return (
        <>
            <h5 className='crypto-converter-title'>Crypto Converter</h5>
            <div className='crypto-converter'>
                <div className='coin-input'>
                    <span>
                        <img className='coin-input-img' src={coin && coin.image && coin.image.small} alt={coin.name} />
                        <p>{coin && coin.symbol && coin.symbol.toUpperCase()}</p>
                    </span>
                    <input type='number' placeholder='0' value={coin_value} onChange={(e) => dispatch(updateValue(e.currentTarget.value))} />
                </div>
                <div className='currency-input'>
                    <span>
                        <img className='currency-input-img' src={logoEur} alt='eur' />
                        <p>EUR</p>
                    </span>
                    <input type='number' placeholder='0' value={currency_value} disabled={true} />
                </div>
            </div>
        </>
    );
};

export default CryptoConverter;
