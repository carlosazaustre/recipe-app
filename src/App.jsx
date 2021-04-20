import "./App.css";
import React, { useState, useEffect } from "react";
import { RecipeTitle } from "./components/RecipeTitle";
import { RecipeImage } from "./components/RecipeImage";
import { IngredientList } from "./components/IngredientList";
import { RecipeSteps } from "./components/RecipeSteps";
import { initialRecipes } from "./initialRecipes";

export default function App() {
  const [recipe, setRecipe] = useState(initialRecipes[0]);
  const [prepared, setPrepared] = useState(false);

  useEffect(() => {
    setPrepared(recipe.ingredients.every((i) => i.prepared));
  }, [recipe]);

  const handleIngredientClick = (index) => {
    const updatedRecipe = { ...recipe };
    updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[
      index
    ].prepared;
    setRecipe(updatedRecipe);
  };

  const { ingredients, image, title, feedback, steps } = recipe;

  return (
    <article className="container">
      <RecipeImage image={image} title={title} />
      <RecipeTitle title={title} feedback={feedback} />
      <IngredientList
        ingredients={ingredients}
        onIngredientClick={handleIngredientClick}
      />
      <h2 className="subtitle">
        {prepared ? "👨‍🍳 Prep work done!" : "🍳 Just Keep chopping"}
      </h2>
      <RecipeSteps steps={steps} />
    </article>
  );
}
