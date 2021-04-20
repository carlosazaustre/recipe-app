import "./IngredientList.css";
import React from "react";

export default function IngredientList(props) {
  const ingredientListItems = props.ingredients.map((ingredient, index) => {
    return (
      <li
        key={index}
        className={`${ingredient.prepared ? "prepared" : ""} ingredient`}
        onClick={() => props.onClick(index)}
      >
        {ingredient.name}
      </li>
    );
  });

  return (
    <>
      <h2 className="subtitle">Ingredients List</h2>
      <ul className="ingredient-list">{ingredientListItems}</ul>
    </>
  );
}
