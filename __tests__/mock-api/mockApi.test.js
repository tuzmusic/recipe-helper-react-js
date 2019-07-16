import axios from "axios";
import * as URLs from "../../src/constants/urls";
import RecipeController from "../../__mocks__/api/RecipeController";
import { startMockServer } from "../../__mocks__/api/mockAdapter";

describe("mockApi", () => {
  const ings = ["1 cup of sugar", "3 eggs", "20 raisins"];
  const steps = ["do this", "do that", "eat", "clean up"];
  const title = "Sample recipe";
  const ingredientsText = ings.join("\n");
  const instructionsText = steps.join("\n");
  const recipeObj = { title, ingredientsText, instructionsText };

  const recipe = RecipeController.create({
    title,
    ingredientsText,
    instructionsText
  });
  describe("RecipeController.create", () => {
    it("assigns the title, id, and slug", () => {
      expect(recipe.title).toEqual(title);
      expect(recipe.slug).toEqual("sample-recipe");
      expect(recipe.id).toEqual(1);
    });
    it("splits ingredients body text into ingredients", () => {
      expect(recipe.ingredients.map(i => i.text)).toEqual(ings);
    });
    it("splits instructions body text into instructions", () => {
      expect(recipe.instructions.map(i => i.text)).toEqual(steps);
    });
  });

  describe("mock API call: create", () => {
    startMockServer();

    it("takes a RecipeFormObject and returns a RecipeApiObject", async () => {
      const res = await axios.post(URLs.createRecipe, recipeObj);
      expect(res.data).toEqual(recipe);
    });
  });
});
