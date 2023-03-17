import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <h6>
                &copy; {new Date().getFullYear()}
                <span>
                    {' '}
                    Crypto<span>Tracker</span>
                </span>
            </h6>
            <h6>All rights reserved</h6>
        </footer>
    );
};

export default Footer;
