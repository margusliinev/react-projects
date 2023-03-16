import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuGridO, CgClose } from 'react-icons/cg';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <nav className='nav'>
            <div className='nav-container'>
                <div className='nav-header'>
                    <h5>
                        Crypto<span>Tracker</span>
                    </h5>
                    <div className='nav-toggle-container'>
                        <button type='button' className={!navOpen ? 'nav-toggle nav-close' : 'nav-toggle'} onClick={() => setNavOpen(true)}>
                            <CgMenuGridO />
                        </button>
                        <button type='button' className={navOpen ? 'nav-toggle nav-open' : 'nav-toggle'} onClick={() => setNavOpen(false)}>
                            <CgClose />
                        </button>
                    </div>
                </div>
                <ul className='nav-links'>
                    <li>
                        <Link to={'/'} className='nav-link'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'} className='nav-link'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to={'/portfolio'} className='nav-link'>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to={'/coins'} className='nav-link'>
                            Coins
                        </Link>
                    </li>
                </ul>
                <button type='button' className='btn get-started-btn'>
                    Get Started
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
