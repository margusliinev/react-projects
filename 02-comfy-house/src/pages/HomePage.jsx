import React from 'react';
import heroImg1 from '../assets/hero-bcg.jpeg';
import heroImg2 from '../assets/hero-bcg-2.jpeg';

const HomePage = () => {
    return (
        <section className='home-page'>
            <div className='home-page-container'>
                <div className='home-page-header'>
                    <h3>Design Your Comfort Zone</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugiat sit voluptates, cupiditate temporibus quasi accusamus debitis reiciendis nobis maxime culpa, labore nam pariatur voluptatum error eos nostrum placeat at.</p>
                    <button type='button' className='btn'>
                        SHOP NOW
                    </button>
                </div>
                <div className='home-page-image-container'>
                    <img src={heroImg1} alt='furniture image big' className='hero-img-main' />
                    <img src={heroImg2} alt='furniture image small' className='hero-img-secondary' />
                </div>
            </div>
        </section>
    );
};

export default HomePage;
