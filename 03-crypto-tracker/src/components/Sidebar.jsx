import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../features/navigation/navigationSlice';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { isSidebarOpen } = useSelector((store) => store.navigation);
    return (
        <aside className={isSidebarOpen ? 'sidebar sidebar-open' : 'sidebar'}>
            <div className='sidebar-container'>
                <button type='button' className='btn sidebar-tracker-btn'>
                    Portfolio Tracker
                </button>
                <ul className='sidebar-links'>
                    <li>
                        <Link to={'/'} className='sidebar-link' onClick={() => dispatch(closeSidebar())}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={'/about'} className='sidebar-link' onClick={() => dispatch(closeSidebar())}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to={'/exchanges'} className='sidebar-link' onClick={() => dispatch(closeSidebar())}>
                            Exchanges
                        </Link>
                    </li>
                    <li>
                        <Link to={'/pricing'} className='sidebar-link' onClick={() => dispatch(closeSidebar())}>
                            Pricing
                        </Link>
                    </li>
                </ul>
                <div className='content-divider'></div>
            </div>
        </aside>
    );
};

export default Sidebar;
