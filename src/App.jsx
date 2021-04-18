import React, { useState, useEffect } from "react";
import RecipeTitle from "./RecipeTitle";
import IngredientList from "./IngredientList";
import RecipeSteps from "./RecipeSteps";

const initialRecipe = {
  title: "Mashed potatoes",
  feedback: {
    rating: 4.8,
    reviews: 20,
  },
  ingredients: [
    { name: '3 potatoes, cut into 1/2" pieces', prepared: false },
    { name: "4 Tbsp butter", prepared: false },
    { name: "1/8 cup heavy cream", prepared: false },
    { name: "Salt", prepared: true },
    { name: "Pepper", prepared: true },
  ],
  steps: [
    "Add cut potatoes to a pot of heavily salted water.",
    "Bring pot to a boil.",
    "Boil the potatoes until fork tender, about 15-20 minutes.",
    "Strain the potatoes",
    "Return potatoes to pot.",
    "Add butter, cream, salt, and pepper to taste.",
    "Mash potatoes.",
    "Reseason and add butter and cream as desired.",
  ],
};

export default function App() {
  const [recipe, setRecipe] = useState(initialRecipe);
  const [prepared, setPrepared] = useState(false);

  useEffect(() => {
    setPrepared(recipe.ingredients.every((i) => i.prepared));
  }, [recipe]);

  const ingredientClick = (index) => {
    const updatedRecipe = { ...recipe };
    updatedRecipe.ingredients[index].prepared = !updatedRecipe.ingredients[
      index
    ].prepared;
    setRecipe(updatedRecipe);
  };

  return (
    <article>
      <h1>Reciple Manager</h1>
      <RecipeTitle title={recipe.title} feedback={recipe.feedback} />
      <IngredientList
        ingredients={recipe.ingredients}
        onClick={ingredientClick}
      />
      {prepared ? <h2>Prep work done!</h2> : <h2>Just keep chopping</h2>}
      <RecipeSteps steps={recipe.steps} />
    </article>
  );
}
