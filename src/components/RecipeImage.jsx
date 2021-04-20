import "./RecipeImage.css";
import React from "react";

export function RecipeImage({ image, title }) {
  return (
    <img className="image" src={`recipes/${image}`} alt={title} title={title} />
  );
}
