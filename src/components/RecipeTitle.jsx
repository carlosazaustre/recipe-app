import "./RecipeTitle.css";
import React from "react";

export default function RecipeTitle(props) {
  return (
    <section className="recipe-title">
      <h2>{props.title}</h2>
      <h3 className={props?.feedback?.rating <= 3.5 ? "red" : "green"}>
        {props?.feedback?.rating} from {props?.feedback?.reviews} reviews
      </h3>
    </section>
  );
}
