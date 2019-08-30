// @flow
import React from "react";
import Recipe from "../../models/Recipe";
import { Link } from "react-router-dom";

type Props = { recipes: Recipe[] };

export const RecipeList = ({ recipes }: Props) => {
  // console.log(recipes);
  return (
    <div style={styles.container}>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe, i) => {
          return (
            <li style={styles.listItem} key={i}>
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
const styles = { container: { padding: 10 }, listItem: { padding: 2 } };
