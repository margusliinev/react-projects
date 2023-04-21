import React from 'react';
import { useSelector } from 'react-redux';
import logoEur from '../assets/logoEur.png';

const CryptoConverter = () => {
    const { coin } = useSelector((store) => store.coin);
    return (
        <>
            <h5 className='crypto-converter-title'>Crypto Converter</h5>
            <div className='crypto-converter'>
                <div className='coin-input'>
                    <span>
                        <img className='coin-input-img' src={coin && coin.image && coin.image.small} alt={coin.name} />
                        <p>{coin && coin.symbol && coin.symbol.toUpperCase()}</p>
                    </span>
                    <input type='number' placeholder='0' />
                </div>
                <div className='currency-input'>
                    <span>
                        <img className='currency-input-img' src={logoEur} alt='eur' />
                        <p>EUR</p>
                    </span>
                    <input type='number' placeholder='0' />
                </div>
            </div>
        </>
    );
};

export default CryptoConverter;
