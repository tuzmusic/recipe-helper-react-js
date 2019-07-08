// @flow
import React from "react";

type Props = { ingredients: Object[] };

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
