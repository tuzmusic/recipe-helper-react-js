import React from "react";

const IngredientsList = ({ ingredients }) => {
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
