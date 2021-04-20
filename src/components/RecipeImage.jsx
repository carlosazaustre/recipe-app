import "./RecipeImage.css";
import React from "react";

export default function RecipeImage(props) {
  return (
    <img
      className="image"
      src={`recipes/${props.image}`}
      alt={props.title}
      title={props.title}
    />
  );
}
