import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-content">
          <a href="#" className="navbar-logo">
            <img src="/logo.png" alt="InnovApp Solutions Logo" />
            <span>InnovApp Solutions</span>
          </a>
          
          <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="navbar-links">
              <li><a href="#" className="active">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <button className="navbar-cta">Get Started</button>
          
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;