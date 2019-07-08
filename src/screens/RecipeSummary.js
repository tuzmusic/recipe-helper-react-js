import React from "react";
import IngredientsList from "./RecipeSummary/IngredientsList";
import InstructionsList from "./RecipeSummary/InstructionsList";

const RecipeSummary = ({ recipe, currentStep }) => {
  return (
    <div className="recipe-summary">
      <h1 id="recipe-title">{recipe.title}</h1>
      <IngredientsList ingredients={recipe.ingredients} />
      <InstructionsList steps={recipe.steps} currentStep={currentStep} />
    </div>
  );
};

export default RecipeSummary;
