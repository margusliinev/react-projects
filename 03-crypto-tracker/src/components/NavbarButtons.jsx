import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { closeSidebar } from '../features/navigation/navigationSlice';
import { useDispatch } from 'react-redux';

const NavbarButtons = () => {
    const [myUser, setMyUser] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated) {
            setMyUser(user);
        } else {
            setMyUser(null);
        }
    }, [isAuthenticated]);

    return (
        <div className='user-buttons'>
            {!myUser ? (
                <div className='login-register-buttons'>
                    <button type='button' className='btn user-login-btn' onClick={() => loginWithRedirect()}>
                        Login
                    </button>
                    <button type='button' className='btn user-register-btn' onClick={() => loginWithRedirect()}>
                        Register
                    </button>
                </div>
            ) : (
                <div className='user-btn-container'>
                    <button
                        type='button'
                        className='btn user-logout-btn'
                        onClick={() => setToggleDropdown(!toggleDropdown)}
                        onBlur={() => {
                            setTimeout(() => {
                                setToggleDropdown(false);
                            }, 150);
                        }}
                    >
                        <span>
                            <FaUserCircle />
                        </span>
                        <p>{myUser.nickname.split('.')[0]}</p>
                    </button>
                    <div className={toggleDropdown ? 'dropdown show-dropdown' : 'dropdown'}>
                        <Link
                            to={'/portfolio'}
                            className='dropdown-btn'
                            onClick={() => {
                                setToggleDropdown(!toggleDropdown);
                                dispatch(closeSidebar());
                            }}
                        >
                            Your Portfolio
                        </Link>
                        <button className='dropdown-btn' onClick={() => logout({ returnTo: window.location.origin })}>
                            Sign Out
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
export default NavbarButtons;
