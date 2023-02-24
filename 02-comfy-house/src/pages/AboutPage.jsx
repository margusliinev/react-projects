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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis tempore eos cumque cupiditate quia facere labore. Fuga explicabo delectus expedita, ducimus, pariatur modi nisi rem veritatis, assumenda molestias libero facere obcaecati consequuntur temporibus eum soluta velit molestiae quam ipsa? Dolorem culpa at laboriosam aspernatur debitis! Suscipit voluptatum asperiores ab quasi!</p>
                </div>
            </div>
        </section>
    );
};

export default AboutPage;
