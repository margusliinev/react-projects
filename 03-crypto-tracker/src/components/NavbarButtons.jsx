import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FaUserCircle } from 'react-icons/fa';

const NavbarButtons = () => {
    const [myUser, setMyUser] = useState(null);
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            setMyUser(user);
        } else {
            setMyUser(null);
        }
    }, [isAuthenticated]);

    return (
        <div>
            <button type='button' className={!myUser ? 'btn navbar-login-btn' : 'hide-button'} onClick={() => loginWithRedirect()}>
                Login
            </button>
            <button type='button' className={!myUser ? 'btn navbar-register-btn' : 'hide-button'} onClick={() => loginWithRedirect()}>
                Register
            </button>
            <button type='button' className={myUser ? 'btn navbar-logout-btn' : 'hide-button'} onClick={() => logout({ returnTo: window.location.origin })}>
                Logout <FaUserCircle />
            </button>
        </div>
    );
};
export default NavbarButtons;
