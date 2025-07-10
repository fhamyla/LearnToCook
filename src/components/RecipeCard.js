import React from 'react';
import './RecipeCard.css';

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
            e.target.src = 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop';
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