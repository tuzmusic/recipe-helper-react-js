// @flow
import Recipe from "../../src/models/Recipe";
import Ingredient from "../../src/models/Ingredient";
import Instruction from "../../src/models/Instruction";
import type { RecipeApiObject } from "../../src/models/Recipe";

describe("Recipe.fromApi", () => {
  it("takes an API response and returns a recipe", () => {
    const ings = ["1 cup of sugar", "3 eggs"];
    const steps = ["do this", "do that"];
    const obj: RecipeApiObject = {
      title: "A Recipe",
      slug: "a-recipe",
      id: 1,
      ingredients: ings.map(i => ({ text: i })),
      instructions: steps.map(i => ({ text: i }))
    };
    const recipe = Recipe.fromApi(obj);
    expect(recipe.ingredients).toStrictEqual(ings.map(i => new Ingredient(i)));
    expect(recipe.instructions).toStrictEqual(
      steps.map(i => new Instruction(i))
    );
  });
});
