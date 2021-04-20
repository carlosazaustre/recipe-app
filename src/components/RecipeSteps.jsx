import "./RecipeSteps.css";
import React from "react";

export function RecipeSteps({ steps }) {
  return (
    <>
      <h2 className="subtitle">Steps</h2>
      <ol className="step-list">
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </>
  );
}
