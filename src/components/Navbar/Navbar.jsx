import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './Images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Brand Logo" />
        </div>

        {/* Desktop links */}
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div className="navbar-action">
          <button className="donate-btn">Donate</button>
        </div>

        {/* Hamburger button */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-links">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
          <button className="donate-btn mobile-donate">Donate</button>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div className="menu-backdrop" onClick={closeMenu} aria-hidden="true" />
      )}
    </>
  );
};

export default Navbar;