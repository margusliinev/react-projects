import React from 'react';
import { useParams } from 'react-router-dom';
import { addToPortfolio } from '../features/portfolio/portfolioSlice';
import { useDispatch, useSelector } from 'react-redux';

const TrackCoinButton = () => {
    const dispatch = useDispatch();
    const { coin } = useSelector((store) => store.coin);
    const { id } = useParams();
    return (
        <button type='button' className='btn track-coin-button' onClick={() => dispatch(addToPortfolio({ id: coin.id, coin: coin }))}>
            Track {id}
        </button>
    );
};

export default TrackCoinButton;
