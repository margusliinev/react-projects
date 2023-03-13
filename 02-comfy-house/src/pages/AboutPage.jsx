import React from 'react';
import PageHero from '../components/PageHero';
import aboutImg from '../assets/hero-bcg.jpeg';

const AboutPage = () => {
    return (
        <section className='about-page'>
            <PageHero title='About' />
            <div className='about-page-container'>
                <img src={aboutImg} alt='furniture image' className='about-img' />
                <div className='about-info'>
                    <h3>Our Story</h3>
                    <div className='title-underline'></div>
                    <p>Comfy House is a furniture store that is dedicated to providing customers with comfortable, stylish, and high-quality furniture that transforms their house into a warm and inviting home. With a wide selection of sofas, armchairs, coffee tables, dining sets, and home decor products, Comfy House has everything you need to create a cozy and welcoming space that you will love coming home to.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
