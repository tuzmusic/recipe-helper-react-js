// @flow
import Recipe from "../../src/models/Recipe";
import Ingredient from "../../src/models/Ingredient";
import Instruction from "../../src/models/Instruction";
import type { RecipeApiObject } from "../../src/models/Recipe";

export default class RecipeController {
  static create(obj: RecipeFormObject): RecipeApiObject {
    const recipe = {};
    recipe.title = obj.title;
    recipe.slug = obj.title.toLowerCase().replace(" ", "-");
    recipe.id = 1;
    recipe.ingredients = obj.ingredientsText
      .split("\n")
      .map(i => ({ text: i.trim() }));
    recipe.instructions = obj.instructionsText
      .split("\n")
      .map(i => new Instruction(i.trim()));
    return recipe;
  }
}

type RecipeFormObject = {
  title: string,
  ingredientsText: string,
  instructionsText: string
};
