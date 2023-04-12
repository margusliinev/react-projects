import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCoin, removeCoinError } from '../features/coin/coinSlice';
import { Loader } from '../components';

const SingleCoinPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { coin_loading, coin_error, coin } = useSelector((store) => store.coin);

    useEffect(() => {
        dispatch(fetchCoin(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`));
    }, []);

    useEffect(() => {
        if (coin_error) {
            navigate('/coins');
        }
        dispatch(removeCoinError());
    }, [coin_error]);

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
            <div className='single-coin-container'>
                <div className='single-coin-header'>
                    <div>
                        <span className='single-coin-rank'>Rank {coin.coingecko_rank}</span>
                        <div>
                            <img className='single-coin-image' src={coin && coin.image && coin.image.small} alt={coin.name} />
                            <h6 className='single-coin-name'>{coin.name}</h6>
                        </div>
                        <div>
                            <p className='single-coin-price'></p>
                            <span className='single-coin-price-change'>{coin.market_data.price_change_percentage_24h.toFixed(2) + '%'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SingleCoinPage;
