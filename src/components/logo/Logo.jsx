import React from 'react';
import { NavLink } from 'react-router-dom';

function Logo() {
    return (
        <>
            <button className="logo-btn">
                <NavLink to="/">
                    <img className='logo' src='assets/glomil-logo.png' alt="glomil-site-logo" />
                </NavLink>
            </button>
        </>
    )
}

export default Logo;