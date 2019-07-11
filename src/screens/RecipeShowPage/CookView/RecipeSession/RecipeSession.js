// @flow
import React from "react";
import type Recipe from "../../../../models/Recipe";

type Props = {
  recipe: Recipe,
  currentStep: number,
  onNextClick: Function,
  onPrevClick: Function
};

const RecipeSession = ({
  recipe,
  currentStep,
  onNextClick,
  onPrevClick
}: Props) => {
  return (
    <div className="recipe-session">
      <h3>
        Step {currentStep + 1} of {recipe.steps.length}
      </h3>
      <h1>{recipe.steps[currentStep].text}</h1>
      <span>
        <button onClick={onPrevClick}>{"<<"}</button>
        <button onClick={onNextClick}>>></button>
      </span>
    </div>
  );
};

export default RecipeSession;
