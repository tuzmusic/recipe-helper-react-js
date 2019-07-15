import Recipe from "../../src/models/Recipe";

describe("Recipe.create", () => {
  const ingredientsText = `1 cup of sugar
  3 eggs
  20 raisins`;
  const instructionsText = `do this
    do that
    eat
    clean up`;
  const recipe = Recipe.create({ ingredientsText, instructionsText });
  it("splits ingredients body text into ingredients", () => {
    expect(recipe.ingredients.map(i => i.text)).toEqual([
      "1 cup of sugar",
      "3 eggs",
      "20 raisins"
    ]);
  });
  it("splits instructions body text into instructions", () => {
    expect(recipe.instructions.map(i => i.text)).toEqual([
      "do this",
      "do that",
      "eat",
      "clean up"
    ]);
  });
});
