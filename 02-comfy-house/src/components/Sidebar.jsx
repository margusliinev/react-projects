import React, { useContext } from 'react';
import { FaTimes, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
    const { cart_total_item_count } = useContext(CartContext);
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
                </ul>
                <Link to={'/cart'} className='sidebar-cart-btn' onClick={closeSidebar}>
                    <div className='cart-icon-container'>
                        <FaShoppingCart className='sidebar-cart-icon' />
                        <span className='cart-value'>{cart_total_item_count}</span>
                    </div>
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;
