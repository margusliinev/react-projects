import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../features/navigation/navigationSlice';
import { NavbarButtons } from '../components';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { isSidebarOpen } = useSelector((store) => store.navigation);
    return (
        <aside className={isSidebarOpen ? 'sidebar sidebar-open' : 'sidebar'}>
            <div className='sidebar-container'>
                <NavbarButtons />
                <div className='content-divider'></div>
                <ul className='sidebar-links'>
                    <li>
                        <Link to={'/'} className='sidebar-link' onClick={() => dispatch(closeSidebar())}>
                            Coins
                        </Link>
                    </li>
                    <li>
                        <Link to={'/exchanges'} className='sidebar-link' onClick={() => dispatch(closeSidebar())}>
                            Exchanges
                        </Link>
                    </li>
                    <li>
                        <Link to={'/portfolio'} className='sidebar-link' onClick={() => dispatch(closeSidebar())}>
                            Portfolio
                        </Link>
                    </li>
                </ul>
                <div className='content-divider'></div>
            </div>
        </aside>
    );
};

export default Sidebar;
