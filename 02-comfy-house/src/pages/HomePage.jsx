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
                    <p>Comfy House is a furniture store that specializes in providing customers with a cozy and inviting atmosphere for their homes. Our selection of furniture includes a wide range of comfortable sofas, plush armchairs and stylish coffee tables.</p>
                    <Link to={'/products'} className='btn'>
                        SHOP NOW
                    </Link>
                </div>
                <div className='home-page-image-container'>
                    <img src={heroImg1} alt='furniture image big' className='hero-img-main' />
                    <img src={heroImg2} alt='furniture image small' className='hero-img-secondary' />
                </div>
            </div>
            <FeaturedProducts />
            <div className='home-page-services'>
                <div className='home-page-services-container'>
                    <article className='home-page-service'>
                        <GiDiamondHard className='service-icon' />
                        <h5>Vision</h5>
                        <p>Our vision is to make every home a comfortable and inviting space that fosters relaxation, creativity, and happiness.</p>
                    </article>
                    <article className='home-page-service'>
                        <GiCompass className='service-icon' />
                        <h5>Mission</h5>
                        <p>At Comfy House, we believe that everyone deserves a cozy and inviting home, and we are dedicated to helping our customers achieve just that.</p>
                    </article>
                    <article className='home-page-service'>
                        <GiStabbedNote className='service-icon' />
                        <h5>History</h5>
                        <p>Comfy House was founded in 1995 by a group of furniture enthusiasts. Starting as a small business, the company quickly gained popularity for its high-quality furniture.</p>
                    </article>
                </div>
            </div>
            <div className='home-page-contact'>
                <div className='home-page-contact-container'>
                    <div className='contact-info'>
                        <h5>Join our newsletter and get 20% off</h5>
                        <p>Join the Comfy House newsletter and stay up-to-date on the latest trends in furniture and home decor. As a subscriber, you get a letter from us once a week.</p>
                    </div>
                    <form className='contact-form'>
                        <input type='email' placeholder='Enter Email' className='contact-form-input' />
                        <button type='button' className='btn submit-btn'>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HomePage;
