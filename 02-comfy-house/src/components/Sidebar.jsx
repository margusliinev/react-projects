import React, { useContext } from 'react';
import { FaTimes } from 'react-icons/fa';
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
                        <Link to={'/cart'} className='sidebar-link' onClick={closeSidebar}>
                            Cart
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
