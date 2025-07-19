// Copyright (c) 2025 fhamyla
// This file is part of LearnToCook and is licensed under the MIT License.
// See the LICENSE file in the project root for license information.
//
// Filipino Virtual Cookbook for Beginners
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-text">
            <h1>🍽️ Pinoy Plate</h1>
            <p className="subtitle">Filipino Virtual Cookbook for Beginners</p>
            <p className="description">
              Discover the rich flavors of Filipino cuisine with easy-to-follow recipes 
              perfect for cooking enthusiasts of all skill levels.
            </p>
          </div>
          <div className="header-decoration">
            <div className="floating-icon">🥘</div>
            <div className="floating-icon">🍜</div>
            <div className="floating-icon">🍰</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 