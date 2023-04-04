import * as React from "react";
import { Link } from "react-router-dom"
import viteLogo from '/vite.svg'

export const Navbar = () => {
    return (
        <header className='navbar'>
            <li className="navbar__title navbar__item">
                <Link to='/'>
                    <img src="./logo.png" className="logo" alt="Vite logo" />
                </Link>
            </li>
            {/*<li className="navbar__item"><Link to='/our-services'>Our Services</Link></li>*/}
            <li className="navbar__item"><Link to='/why-us'>Why Us</Link></li>
            {/*<li className="navbar__item"><Link to='/contact-us'>Contact Us</Link></li>*/}
        </header>
    );
};