// Copyright (c) 2025 fhamyla
// This file is part of LearnToCook and is licensed under the MIT License.
// See the LICENSE file in the project root for license information.
//
// Filipino Virtual Cookbook for Beginners
import React from 'react';
import './RecipeCard.css';
import adoboImage from '../assets/Adobo.jpg';

const RecipeCard = ({ recipe, onClick }) => {
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'var(--pastel-green)';
      case 'medium':
        return 'var(--pastel-yellow)';
      case 'hard':
        return 'var(--pastel-orange)';
      default:
        return 'var(--pastel-blue)';
    }
  };

  return (
    <div className="recipe-card" onClick={onClick}>
      <div className="recipe-image-container">
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          className="recipe-image"
          onError={(e) => {
            e.target.src = adoboImage;
          }}
        />
        <div className="recipe-overlay">
          <span className="view-recipe">View Recipe</span>
        </div>
      </div>
      <div className="recipe-info">
        <h3 className="recipe-title">{recipe.name}</h3>
        <p className="recipe-description">{recipe.description}</p>
        <div className="recipe-meta">
          <span className="recipe-category">{recipe.category}</span>
          <span 
            className="recipe-difficulty"
            style={{ backgroundColor: getDifficultyColor(recipe.difficulty) }}
          >
            {recipe.difficulty}
          </span>
        </div>
        <div className="recipe-time">
          <span>⏱️ Prep: {recipe.prepTime}</span>
          <span>🔥 Cook: {recipe.cookTime}</span>
          <span>👥 Serves: {recipe.servings}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard; 