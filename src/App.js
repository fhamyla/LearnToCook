import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import RecipeGrid from './components/RecipeGrid';
import RecipeModal from './components/RecipeModal';
import SearchBar from './components/SearchBar';
import CategoryFilters from './components/CategoryFilters';

// Filipino Recipe Data
const filipinoRecipes = [
  {
    id: 1,
    name: "Adobo",
    category: "Main Dish",
    difficulty: "Easy",
    prepTime: "15 mins",
    cookTime: "45 mins",
    servings: 4,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
    description: "Classic Filipino adobo with chicken, soy sauce, vinegar, and garlic.",
    ingredients: [
      "1 kg chicken, cut into pieces",
      "1/2 cup soy sauce",
      "1/2 cup vinegar",
      "8 cloves garlic, minced",
      "2 bay leaves",
      "1 tsp black peppercorns",
      "1/2 cup water"
    ],
    instructions: [
      "In a large pot, combine chicken, soy sauce, vinegar, garlic, bay leaves, and peppercorns.",
      "Let it marinate for 30 minutes.",
      "Add water and bring to a boil.",
      "Reduce heat and simmer for 30-45 minutes until chicken is tender.",
      "Serve hot with rice."
    ]
  },
  {
    id: 2,
    name: "Sinigang",
    category: "Soup",
    difficulty: "Easy",
    prepTime: "20 mins",
    cookTime: "40 mins",
    servings: 6,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop",
    description: "Sour tamarind soup with pork and vegetables.",
    ingredients: [
      "1 kg pork belly, cut into pieces",
      "2 tomatoes, quartered",
      "1 onion, sliced",
      "2 cups tamarind soup base",
      "1 bunch kangkong (water spinach)",
      "1 eggplant, sliced",
      "2 radishes, sliced",
      "Salt to taste"
    ],
    instructions: [
      "In a large pot, boil pork with tomatoes and onion.",
      "Add tamarind soup base and simmer for 30 minutes.",
      "Add vegetables and cook for 10 more minutes.",
      "Season with salt to taste.",
      "Serve hot with rice."
    ]
  },
  {
    id: 3,
    name: "Pancit Canton",
    category: "Noodles",
    difficulty: "Medium",
    prepTime: "25 mins",
    cookTime: "15 mins",
    servings: 4,
    image: "https://images.unsplash.com/photo-1563379091339-03246963d4a9?w=400&h=300&fit=crop",
    description: "Stir-fried noodles with vegetables and meat.",
    ingredients: [
      "500g pancit canton noodles",
      "200g pork, sliced",
      "200g shrimp, peeled",
      "2 carrots, julienned",
      "1 cabbage, shredded",
      "4 cloves garlic, minced",
      "1 onion, sliced",
      "Soy sauce to taste",
      "Oil for cooking"
    ],
    instructions: [
      "Cook noodles according to package instructions. Drain and set aside.",
      "In a wok, sauté garlic and onion in oil.",
      "Add pork and cook until browned.",
      "Add shrimp and cook for 2 minutes.",
      "Add vegetables and stir-fry for 3 minutes.",
      "Add noodles and soy sauce, mix well.",
      "Serve hot."
    ]
  },
  {
    id: 4,
    name: "Leche Flan",
    category: "Dessert",
    difficulty: "Medium",
    prepTime: "30 mins",
    cookTime: "45 mins",
    servings: 8,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
    description: "Creamy caramel custard dessert.",
    ingredients: [
      "10 egg yolks",
      "1 can condensed milk",
      "1 can evaporated milk",
      "1/2 cup sugar (for caramel)",
      "1 tsp vanilla extract"
    ],
    instructions: [
      "Make caramel by melting sugar in a pan until golden brown.",
      "Pour caramel into llanera molds.",
      "Beat egg yolks and add condensed milk, evaporated milk, and vanilla.",
      "Strain mixture and pour into molds.",
      "Steam for 45 minutes or bake in water bath at 350°F.",
      "Chill before serving."
    ]
  },
  {
    id: 5,
    name: "Lumpia",
    category: "Appetizer",
    difficulty: "Medium",
    prepTime: "40 mins",
    cookTime: "20 mins",
    servings: 6,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
    description: "Crispy spring rolls with ground pork and vegetables.",
    ingredients: [
      "1 pack lumpia wrappers",
      "500g ground pork",
      "2 carrots, julienned",
      "1 cup bean sprouts",
      "4 cloves garlic, minced",
      "1 onion, minced",
      "Soy sauce to taste",
      "Oil for frying"
    ],
    instructions: [
      "Sauté garlic and onion in oil.",
      "Add ground pork and cook until browned.",
      "Add vegetables and soy sauce, cook for 5 minutes.",
      "Let mixture cool completely.",
      "Wrap mixture in lumpia wrappers.",
      "Fry in hot oil until golden brown.",
      "Serve with sweet chili sauce."
    ]
  },
  {
    id: 6,
    name: "Halo-Halo",
    category: "Dessert",
    difficulty: "Easy",
    prepTime: "20 mins",
    cookTime: "0 mins",
    servings: 4,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&h=300&fit=crop",
    description: "Mixed dessert with shaved ice, sweet beans, and ice cream.",
    ingredients: [
      "4 cups shaved ice",
      "1 cup sweet red beans",
      "1 cup sweet white beans",
      "1 cup nata de coco",
      "1 cup kaong (palm fruit)",
      "1 cup ube halaya",
      "4 scoops vanilla ice cream",
      "1 cup evaporated milk",
      "Sugar to taste"
    ],
    instructions: [
      "Layer sweet beans, nata de coco, and kaong in serving glasses.",
      "Add shaved ice on top.",
      "Add ube halaya and ice cream.",
      "Pour evaporated milk and sprinkle sugar.",
      "Mix well before eating.",
      "Serve immediately."
    ]
  }
];

function App() {
  const [recipes, setRecipes] = useState(filipinoRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Main Dish', 'Soup', 'Noodles', 'Appetizer', 'Dessert'];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm} 
        />
        <CategoryFilters 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <RecipeGrid 
          recipes={filteredRecipes} 
          onRecipeClick={handleRecipeClick}
        />
      </div>
      {selectedRecipe && (
        <RecipeModal 
          recipe={selectedRecipe} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
}

export default App; 