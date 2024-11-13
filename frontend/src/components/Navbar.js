// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'; // Adjust the path as necessary

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Hotel Logo" />
                </div>
                <div className="nav-toggle" onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/rooms">Rooms</Link></li>
                    <li><Link to="/booking">Book Now</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
