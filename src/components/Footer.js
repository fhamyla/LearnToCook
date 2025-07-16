// Copyright (c) 2025 fhamyla
// This file is part of LearnToCook and is licensed under the MIT License.
// See the LICENSE file in the project root for license information.
//
// Filipino Virtual Cookbook for Beginners
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} fhamyla. All rights reserved.</p>
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