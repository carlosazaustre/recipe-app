import "./IngredientList.css";
import React from "react";

function IngredientItem({ index, ingredient }) {
  return (
    <li
      key={index}
      className={`${ingredient.prepared ? "prepared" : ""} ingredient`}
      onClick={() => props.onClick(index)}
    >
      {ingredient.name}
    </li>
  );
}

export function IngredientList({ ingredients }) {
  return (
    <>
      <h2 className="subtitle">Ingredients List</h2>
      <ul className="ingredient-list">
        {ingredients.map((ingredient, index) => (
          <IngredientItem index={index} ingredient={ingredient} />
        ))}
      </ul>
    </>
  );
}
