import "./RecipeTitle.css";
import React from "react";

export function RecipeTitle({ title, feedback }) {
  return (
    <section className="recipe-title">
      <h2>{title}</h2>
      <h3 className={feedback?.rating <= 3.5 ? "red" : "green"}>
        {feedback?.rating} from {feedback?.reviews} reviews
      </h3>
    </section>
  );
}
