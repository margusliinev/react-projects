import React from 'react';
import { FaTimes, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isOpen = true;
    return (
        <aside className={isOpen ? 'sidebar sidebar-open' : 'sidebar'}>
            <div className='sidebar-container'>
                <div className='sidebar-header'>
                    <h4>
                        Comfy<span>House</span>
                    </h4>
                    <button type='button' className='sidebar-toggle-btn'>
                        <FaTimes />
                    </button>
                </div>

                <ul className='sidebar-links'>
                    <li>
                        <Link to={'/'} className='sidebar-link'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'} className='sidebar-link'>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to={'/products'} className='sidebar-link'>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to={'/checkout'} className='sidebar-link'>
                            Checkout
                        </Link>
                    </li>
                </ul>
                <div className='sidebar-buttons'>
                    <Link to={'/cart'} className='sidebar-cart-btn'>
                        <div className='cart-icon-container'>
                            <FaShoppingCart className='sidebar-cart-icon' />
                            <span className='cart-value'>0</span>
                        </div>
                    </Link>
                    <div className='button-divider'></div>
                    <button type='button' className='sidebar-login-btn'>
                        Login
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
