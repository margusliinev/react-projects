import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCoin, removeCoinError, resetConverter } from '../features/coin/coinSlice';
import { formatPrice } from '../utils/formatPrice';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import { Loader, PriceHistoryChart, PriceChangeBoxes, TrackCoinButton, MarketStats, CryptoConverter } from '../components';
import { changeChart } from '../features/chart/chartSlice';
import { convertValue } from '../features/coin/coinSlice';

const SingleCoinPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { coin_loading, coin_error, coin, coin_price, coin_value, currency_value } = useSelector((store) => store.coin);
    const { chart_days } = useSelector((store) => store.chart);

    useEffect(() => {
        dispatch(fetchCoin(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`));
    }, []);

    useEffect(() => {
        if (coin_error) {
            navigate('/coins');
        }
        dispatch(removeCoinError());
    }, [coin_error]);

    useEffect(() => {
        dispatch(convertValue());
    }, [coin_value, currency_value]);

    useEffect(() => {
        dispatch(resetConverter());
    }, [coin_price]);

    if (coin_loading) {
        return (
            <main className='single-coin'>
                <div className='single-coin-container'>
                    <Loader />
                </div>
            </main>
        );
    }

    const { coingecko_rank, image, name, market_data, symbol } = coin;

    return (
        <main className='single-coin'>
            <div className='single-coin-container'>
                <div className='single-coin-header'>
                    <div className='single-coin-header-container'>
                        <span className='single-coin-rank'>Rank #{coingecko_rank}</span>
                        <div className='single-coin-title'>
                            <img className='single-coin-image' src={image && image.large} alt={name} />
                            <div className='single-coin-name-container'>
                                <h4 className='single-coin-name'>{name}</h4>
                                <h6 className='single-coin-symbol'>{symbol}</h6>
                            </div>
                        </div>
                        <div className='single-coin-price-title'>
                            <p className='single-coin-price'>{`${formatPrice(coin && market_data && market_data.current_price.eur)}`}</p>
                            <div className={coin && market_data && market_data.price_change_percentage_24h > 0 ? 'single-coin-price-change bright-box-green value-green' : 'single-coin-price-change bright-box-red value-red'}>
                                <span>{coin && market_data && market_data.price_change_percentage_24h > 0 ? <RxTriangleUp /> : <RxTriangleDown />}</span>
                                <p className={coin && market_data && market_data.price_change_percentage_24h > 0 ? 'value-green' : 'value-red'}>{coin && market_data ? Math.abs(market_data.price_change_percentage_24h.toFixed(2)) + '%' : 0 + '%'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='big-screen-cta'>
                        <TrackCoinButton />
                    </div>
                </div>
                <div className='single-coin-chart'>
                    <PriceHistoryChart />
                    <div className='price-history-chart-buttons'>
                        <div className='price-history-chart-buttons-container'>
                            <button className={chart_days === 1 ? 'price-history-chart-button active-chart' : 'price-history-chart-button'} data-id='1' onClick={(e) => dispatch(changeChart(e.target.dataset.id))}>
                                24H
                            </button>
                            <button className={chart_days === 7 ? 'price-history-chart-button active-chart' : 'price-history-chart-button'} data-id='7' onClick={(e) => dispatch(changeChart(e.target.dataset.id))}>
                                1W
                            </button>
                            <button className={chart_days === 30 ? 'price-history-chart-button active-chart' : 'price-history-chart-button'} data-id='30' onClick={(e) => dispatch(changeChart(e.target.dataset.id))}>
                                1M
                            </button>
                            <button className={chart_days === 90 ? 'price-history-chart-button active-chart' : 'price-history-chart-button'} data-id='90' onClick={(e) => dispatch(changeChart(e.target.dataset.id))}>
                                3M
                            </button>
                            <button className={chart_days === 365 ? 'price-history-chart-button active-chart' : 'price-history-chart-button'} data-id='365' onClick={(e) => dispatch(changeChart(e.target.dataset.id))}>
                                1Y
                            </button>
                        </div>
                    </div>
                </div>
                <PriceChangeBoxes />
                <div className='small-screen-cta'>
                    <TrackCoinButton />
                </div>
                <MarketStats />
                <CryptoConverter />
            </div>
        </main>
    );
};

export default SingleCoinPage;
