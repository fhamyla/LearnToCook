// Copyright (c) 2025 fhamyla
// This file is part of LearnToCook and is licensed under the MIT License.
// See the LICENSE file in the project root for license information.
//
// Filipino Virtual Cookbook for Beginners
import React from 'react';
import './CategoryFilters.css';

const CategoryFilters = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="category-filters-container">
      <h3 className="filters-title">Filter by Category:</h3>
      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilters; 