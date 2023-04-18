import React from 'react';
import { useParams } from 'react-router-dom';

const TrackCoinButton = () => {
    const { id } = useParams();
    return (
        <button type='button' className='btn track-coin-button'>
            Track {id}
        </button>
    );
};

export default TrackCoinButton;
