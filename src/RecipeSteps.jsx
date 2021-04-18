import React from "react";

export default function RecipeSteps(props) {
  const recipeStepsList = props.steps.map((step, index) => {
    return <li key={index}>{step}</li>;
  });

  return <ol>{recipeStepsList}</ol>;
}
