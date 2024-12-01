import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {

    const buttonPassive = () => {
        alert("Button passive. Content not found...");
    }

    return (
        <>
            <div className='footer-content'>

                <button className='footer-content-home-btn'><NavLink to="/">@ 2024 Glomil Portal</NavLink></button>

                <span onClick={buttonPassive}>Careers</span>

                <span onClick={buttonPassive}>Trademark</span>

                <span onClick={buttonPassive}>Privacy</span>

                <span onClick={buttonPassive}>License</span>

            </div>
        </>
    )
}

export default Footer;