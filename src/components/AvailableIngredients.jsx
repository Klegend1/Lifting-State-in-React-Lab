import React from "react";

const AvailableIngredients = ({ ingredients, addToBurger }) => {
  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.name}
            <button onClick={() => addToBurger(ingredient.name)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailableIngredients;
