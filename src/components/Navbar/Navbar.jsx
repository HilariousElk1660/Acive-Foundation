import React from 'react';
import './Navbar.css';
import logo from './Images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Brand Logo" />
      </div>
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
        <a href="#projects">Projects</a>
      </div>
      <div className="navbar-action">
        <button className="donate-btn">Donate</button>
      </div>
    </nav>
  );
};

export default Navbar;
