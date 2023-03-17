import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {
    const { isSidebarOpen } = useSelector((store) => store.navigation);
    return (
        <aside className={isSidebarOpen ? 'sidebar sidebar-open' : 'sidebar'}>
            <div className='sidebar-container'>
                <input type='text' className='mobile-search' placeholder='Search' />
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
                        <Link to={'/portfolio'} className='sidebar-link'>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to={'/coins'} className='sidebar-link'>
                            Coins
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
