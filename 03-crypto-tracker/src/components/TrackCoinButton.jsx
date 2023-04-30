import React from 'react';
import { useParams } from 'react-router-dom';
import { addToPortfolio } from '../features/portfolio/portfolioSlice';
import { useDispatch, useSelector } from 'react-redux';

const TrackCoinButton = () => {
    const dispatch = useDispatch();
    const { coins } = useSelector((store) => store.coins);
    const { id } = useParams();
    return (
        <button type='button' className='btn track-coin-button' onClick={() => dispatch(addToPortfolio({ id: id, coin: coins.find((coin) => id === coin.id) }))}>
            Track {id}
        </button>
    );
};

export default TrackCoinButton;
