import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} LearnToCook. All rights reserved.</p>
            <p>Filipino Virtual Cookbook for Beginners</p>
          </div>
          <div className="footer-links">
            <span>🍽️ Made with love for Filipino cuisine</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 