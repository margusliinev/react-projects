import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Stars = ({ stars, reviews }) => {
    return (
        <div className='stars-reviews'>
            <div className='stars'>
                <span>{stars >= 1 ? <BsStarFill /> : stars >= 0.5 ? <BsStarHalf /> : null}</span>
            </div>
            <div className='stars'>
                <span>{stars >= 2 ? <BsStarFill /> : stars >= 1.5 ? <BsStarHalf /> : null}</span>
            </div>
            <div className='stars'>
                <span>{stars >= 3 ? <BsStarFill /> : stars >= 2.5 ? <BsStarHalf /> : null}</span>
            </div>
            <div className='stars'>
                <span>{stars >= 4 ? <BsStarFill /> : stars >= 3.5 ? <BsStarHalf /> : null}</span>
            </div>
            <div className='stars'>
                <span>{stars >= 5 ? <BsStarFill /> : stars >= 4.5 ? <BsStarHalf /> : null}</span>
            </div>
            <p className='reviews'>({reviews} customer reviews)</p>
        </div>
    );
};

export default Stars;
