import "./IngredientList.css";
import React from "react";

export function IngredientList({ ingredients, onIngredientClick }) {
  return (
    <>
      <h2 className="subtitle">Ingredients List</h2>
      <ul className="ingredient-list">
        {ingredients?.map((ingredient, index) => (
          <li
            key={index}
            className={`${ingredient.prepared ? "prepared" : ""} ingredient`}
            ingredient={ingredient}
            onClick={() => onIngredientClick(index)}
          >
            {ingredient.name}
          </li>
        ))}
      </ul>
    </>
  );
}
