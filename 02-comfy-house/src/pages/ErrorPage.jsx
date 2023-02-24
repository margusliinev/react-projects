import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='error-page'>
            <div className='error-page-container'>
                <h1>404</h1>
                <h3>Sorry, this page doesn't exist.</h3>
                <Link to={'/'} className='btn'>
                    back home
                </Link>
            </div>
        </section>
    );
};

export default ErrorPage;
