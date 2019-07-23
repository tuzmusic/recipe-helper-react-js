// @flow
import React from "react";
import IngredientsList from "./IngredientsList";
import InstructionsList from "./InstructionsList";
import type Recipe from "../../../../models/Recipe";

type Props = { recipe: Recipe, currentStep: number };

const RecipeSummary = ({ recipe, currentStep }: Props) => {
  return (
    <div className="recipe-summary">
      <h1 id="recipe-title">{recipe.title}</h1>
      <IngredientsList ingredients={recipe.ingredients} />
      <InstructionsList steps={recipe.instructions} currentStep={currentStep} />
    </div>
  );
};

export default RecipeSummary;
