import React from 'react';
import './RecipeList.css';

function RecipeList() {
    const recipes = [
        { id: 1, name: 'Pancakes', ingredients: 'Flour, Milk, Eggs, Sugar' },
        { id: 2, name: 'Spaghetti', ingredients: 'Pasta, Tomatoes, Garlic, Basil' },
        { id: 3, name: 'Apple Pie', ingredients: 'Apples, Flour, Butter, Sugar' },
    ];

    return (
        <div className="recipe-list">
            <h2>Today's Recipes</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <h3>{recipe.name}</h3>
                        <p>{recipe.ingredients}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
