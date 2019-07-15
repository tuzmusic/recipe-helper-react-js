import RecipeController from "../../__mocks__/api/RecipeController";

describe("mockApi", () => {
  describe("RecipeController.create", () => {
    const ings = ["1 cup of sugar", "3 eggs", "20 raisins"];
    const steps = ["do this", "do that", "eat", "clean up"];
    const ingredientsText = ings.join("\n");
    const instructionsText = steps.join("\n");
    const recipe = RecipeController.create({
      ingredientsText,
      instructionsText
    });
    it("splits ingredients body text into ingredients", () => {
      expect(recipe.ingredients.map(i => i.text)).toEqual(ings);
    });
    it("splits instructions body text into instructions", () => {
      expect(recipe.instructions.map(i => i.text)).toEqual(steps);
    });
  });
});
