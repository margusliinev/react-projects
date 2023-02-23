import React from 'React';
import { FaBars, FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav-container'>
                <div className='nav-header'>
                    <h4>
                        Comfy<span>House</span>
                    </h4>
                    <button type='button' className='nav-toggle-btn'>
                        <FaBars />
                    </button>
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
                        <Link to={'/products'} className='nav-link'>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to={'/checkout'} className='nav-link'>
                            Checkout
                        </Link>
                    </li>
                </ul>
                <div className='nav-buttons'>
                    <Link to={'/cart'} className='nav-cart-btn'>
                        <div className='cart-icon-container'>
                            <FaShoppingCart className='nav-cart-icon' />
                            <span className='cart-value'>0</span>
                        </div>
                    </Link>
                    <div className='button-divider'></div>
                    <button type='button' className='nav-login-btn'>
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
