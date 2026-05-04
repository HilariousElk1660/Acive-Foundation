import React from 'react';
import './Navbar.css';
import logo from './Images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Brand Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="navbar-action">
        <button className="donate-btn">Donate</button>
      </div>
    </nav>
  );
};

export default Navbar;
