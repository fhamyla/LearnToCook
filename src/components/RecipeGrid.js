// Copyright (c) 2025 fhamyla
// This file is part of LearnToCook and is licensed under the MIT License.
// See the LICENSE file in the project root for license information.
//
// Filipino Virtual Cookbook for Beginners
import React from 'react';
import RecipeCard from './RecipeCard';
import './RecipeGrid.css';

const RecipeGrid = ({ recipes, onRecipeClick }) => {
  if (recipes.length === 0) {
    return (
      <div className="no-recipes">
        <div className="no-recipes-content">
          <span className="no-recipes-icon">🍽️</span>
          <h3>No recipes found</h3>
          <p>Try adjusting your search or filter criteria</p>
        </div>
      </div>
    );
  }

  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={() => onRecipeClick(recipe)}
        />
      ))}
    </div>
  );
};

export default RecipeGrid; 