import React from 'react';
import './RecipeModal.css';
import adoboImage from '../assets/Adobo.jpg';

const RecipeModal = ({ recipe, onClose }) => {
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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <img 
            src={recipe.image} 
            alt={recipe.name} 
            className="modal-image"
            onError={(e) => {
              e.target.src = adoboImage;
            }}
          />
          <div className="modal-title-section">
            <h2 className="modal-title">{recipe.name}</h2>
            <p className="modal-description">{recipe.description}</p>
            <div className="modal-meta">
              <span className="modal-category">{recipe.category}</span>
              <span 
                className="modal-difficulty"
                style={{ backgroundColor: getDifficultyColor(recipe.difficulty) }}
              >
                {recipe.difficulty}
              </span>
            </div>
            <div className="modal-stats">
              <div className="stat">
                <span className="stat-icon">⏱️</span>
                <span className="stat-label">Prep Time</span>
                <span className="stat-value">{recipe.prepTime}</span>
              </div>
              <div className="stat">
                <span className="stat-icon">🔥</span>
                <span className="stat-label">Cook Time</span>
                <span className="stat-value">{recipe.cookTime}</span>
              </div>
              <div className="stat">
                <span className="stat-icon">👥</span>
                <span className="stat-label">Servings</span>
                <span className="stat-value">{recipe.servings}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="recipe-section">
            <h3 className="section-title">📋 Ingredients</h3>
            <ul className="ingredients-list">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          <div className="recipe-section">
            <h3 className="section-title">👨‍🍳 Instructions</h3>
            <ol className="instructions-list">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="instruction-item">
                  {instruction}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal; 