import React from 'react';
import { Link } from 'react-router-dom';
import { CgMenuGridO, CgClose } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { openSidebar, closeSidebar } from '../features/navigation/navigationSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const { isSidebarOpen } = useSelector((store) => store.navigation);
    return (
        <nav className={isSidebarOpen ? 'nav nav-border' : 'nav'}>
            <div className='nav-container'>
                <div className='nav-header'>
                    <h5>
                        Crypto<span>Tracker</span>
                    </h5>
                    <div className='nav-toggle-container'>
                        <button type='button' className={!isSidebarOpen ? 'nav-toggle nav-open' : 'nav-toggle'} onClick={() => dispatch(openSidebar())}>
                            <CgMenuGridO />
                        </button>
                        <button type='button' className={isSidebarOpen ? 'nav-toggle nav-close' : 'nav-toggle'} onClick={() => dispatch(closeSidebar())}>
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
