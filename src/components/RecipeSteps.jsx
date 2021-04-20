import "./RecipeSteps.css";
import React from "react";

export default function RecipeSteps(props) {
  const recipeStepsList = props.steps.map((step, index) => {
    return <li key={index}>{step}</li>;
  });

  return (
    <>
      <h2 className="subtitle">Steps</h2>
      <ol className="step-list">{recipeStepsList}</ol>
    </>
  );
}
