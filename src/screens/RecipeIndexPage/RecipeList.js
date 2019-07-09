// @flow
import React from "react";
import Recipe from "../../models/Recipe";
import { Link } from "react-router-dom";

type Props = { recipes: Recipe[] };

export const RecipeList = ({ recipes }: Props) => {
  return (
    <div>
      <h1>Recipes</h1>
      <ul className="recipe-list">
        {recipes.map((recipe, i) => {
          return (
            <li key={i}>
              <Link to={`/recipes/${recipe.id}/${recipe.slug}`}>
                {recipe.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default RecipeList;
