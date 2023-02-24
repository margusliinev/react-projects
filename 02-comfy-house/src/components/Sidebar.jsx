import React, { useContext } from 'react';
import { FaTimes, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../context/SidebarContext';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
    return (
        <aside className={isSidebarOpen ? 'sidebar sidebar-open' : 'sidebar'}>
            <div className='sidebar-container'>
                <div className='sidebar-header'>
                    <h4>
                        Comfy<span>House</span>
                    </h4>
                    <button type='button' className='sidebar-toggle-btn' onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>

                <ul className='sidebar-links'>
                    <li>
                        <Link to={'/'} className='sidebar-link' onClick={closeSidebar}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'} className='sidebar-link' onClick={closeSidebar}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to={'/products'} className='sidebar-link' onClick={closeSidebar}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link to={'/checkout'} className='sidebar-link' onClick={closeSidebar}>
                            Checkout
                        </Link>
                    </li>
                </ul>
                <div className='sidebar-buttons'>
                    <Link to={'/cart'} className='sidebar-cart-btn' onClick={closeSidebar}>
                        <div className='cart-icon-container'>
                            <FaShoppingCart className='sidebar-cart-icon' />
                            <span className='cart-value'>0</span>
                        </div>
                    </Link>
                    <div className='button-divider'></div>
                    <button type='button' className='sidebar-login-btn' onClick={closeSidebar}>
                        Login
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
