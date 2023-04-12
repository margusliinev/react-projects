import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCoin } from '../features/coin/coinSlice';
import { Loader } from '../components';

const SingleCoinPage = () => {
    const dispatch = useDispatch();
    const { coin_loading, coin } = useSelector((store) => store.coin);
    const { id } = useParams();

    useEffect(() => {
        dispatch(fetchCoin(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`));
    }, []);

    console.log(coin);

    if (coin_loading) {
        return (
            <main className='single-coin'>
                <div className='single-coin-container'>
                    <Loader />
                </div>
            </main>
        );
    }

    return (
        <main className='single-coin'>
            <div className='single-coin-container'></div>
        </main>
    );
};

export default SingleCoinPage;
