// @flow

import React from "react";
import Recipe from "../../models/Recipe";

type Props = { recipes: Recipe[] };

export const RecipeList = ({ recipes }: Props) => {
  return (
    <div>
      <h1>Recipes</h1>
      <ul className="recipe-list">
        {recipes.map((recipe, i) => {
          return <li key={i}>{recipe.title}</li>;
        })}
      </ul>
    </div>
  );
};
export default RecipeList;
