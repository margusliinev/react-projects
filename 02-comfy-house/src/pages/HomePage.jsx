import React from 'react';
import { Link } from 'react-router-dom';
import heroImg1 from '../assets/hero-bcg.jpeg';
import heroImg2 from '../assets/hero-bcg-2.jpeg';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
import { FeaturedProducts } from '../components';

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
            <div className='featured-products'>
                <h4>Featured Products</h4>
                <div className='title-underline'></div>
                <div className='featured-products-container'>
                    <FeaturedProducts />
                </div>
                <Link to={'/products'} className='btn'>
                    all products
                </Link>
            </div>
            <div className='home-page-services'>
                <div className='home-page-services-container'>
                    <article className='home-page-service'>
                        <GiCompass className='service-icon' />
                        <h5>Mission</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit facilis asperiores neque ad suscipit commodi eos qui molestias iste nulla.</p>
                    </article>
                    <article className='home-page-service'>
                        <GiDiamondHard className='service-icon' />
                        <h5>Vision</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit facilis asperiores neque ad suscipit commodi eos qui molestias iste nulla.</p>
                    </article>
                    <article className='home-page-service'>
                        <GiStabbedNote className='service-icon' />
                        <h5>History</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit facilis asperiores neque ad suscipit commodi eos qui molestias iste nulla.</p>
                    </article>
                </div>
            </div>
            <div className='home-page-contact'>
                <div className='home-page-contact-container'>
                    <div className='contact-info'>
                        <h5>Join our newsletter and get 20% off</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ea praesentium dolore nulla animi saepe dicta placeat iure nostrum repudiandae.</p>
                    </div>
                    <form className='contact-form'>
                        <input type='email' placeholder='Enter Email' className='contact-form-input' />
                        <button type='submit' className='btn submit-btn'>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
