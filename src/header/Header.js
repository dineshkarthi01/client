import React from 'react';
import './Header.css';

import logo from './logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <nav className="navbar">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#login" className="nav-link">Login</a>
          </li>
          <li className="nav-item">
            <a href="#cart" className="nav-link">Cart</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">About</a>
          </li>
        </ul>
      </nav>
    </header>
    
  );
  
};

export default Header;
