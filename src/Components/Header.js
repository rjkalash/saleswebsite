import React from "react";
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">PB</a>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
        <div className="header-buttons">
          <a href="/login" className="login-button">Login</a>
          <a href="/signup" className="signup-button">Sign Up</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
