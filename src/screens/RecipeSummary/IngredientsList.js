// @flow
import React from "react";
import type Ingredient from "../../models/Ingredient";

type Props = { ingredients: Ingredient[] };

export const IngredientsList = ({ ingredients }: Props) => {
  return (
    <div className="ingredients-list">
      <h3>Ingredients</h3>
      {ingredients.map((ing, i) => (
        <li key={i}>
          <input type="checkbox" />
          {"  "}
          {ing.text}
        </li>
      ))}
    </div>
  );
};

export default IngredientsList;
