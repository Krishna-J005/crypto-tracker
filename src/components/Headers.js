// Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Headers.css';
import logo from '../assets/logo.svg'
const Headers = () => {
    const location = useLocation();
  
    return (

        <header className="header">
            <div className="logo">
                <Link to="/"><img src={logo} alt="Logo" width="32" /></Link>
            </div>
            <nav className="nav">
                <ul>
                    <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                    <li><Link to="/crypto-converter" className={location.pathname === '/crypto-converter' ? 'active' : ''}>Crypto Converter</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Headers;
