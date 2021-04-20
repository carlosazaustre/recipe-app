import "./App.css";
import React, { useState, useEffect } from "react";
import { RecipeTitle } from "./components/RecipeTitle";
import { RecipeImage } from "./components/RecipeImage";
import { IngredientList } from "./components/IngredientList";
import { RecipeSteps } from "./components/RecipeSteps";
import { initialRecipes } from "./initialRecipes";

export default function App() {
  const [recipe, setRecipe] = useState(initialRecipes);
  const [prepared, setPrepared] = useState(false);

  useEffect(() => {
    setPrepared(recipe[0].ingredients.every((i) => i.prepared));
  }, [recipe]);

  const ingredientClick = (index) => {
    const updatedRecipe = { ...recipe[0] };
    updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[
      index
    ].prepared;
    setRecipe(updatedRecipe);
  };

  return (
    <article className="container">
      <RecipeImage image={recipe[0].image} title={recipe[0].title} />
      <RecipeTitle title={recipe[0].title} feedback={recipe[0].feedback} />
      <IngredientList
        ingredients={recipe[0].ingredients}
        onClick={ingredientClick}
      />
      <h2 className="subtitle">
        {recipe[0].prepared ? "👨‍🍳 Prep work done!" : "🍳 Just Keep chopping"}
      </h2>
      <RecipeSteps steps={recipe[0].steps} />
    </article>
  );
}
