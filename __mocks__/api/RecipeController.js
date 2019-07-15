// @flow
import Recipe from "../../src/models/Recipe";
import Ingredient from "../../src/models/Ingredient";
import Instruction from "../../src/models/Instruction";

export default class RecipeController {
  static create(obj: RecipeFormObject): RecipeApiObject {
    const recipe = {};
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

type RecipeApiObject = {
  title: string,
  slug: string,
  id: number,
  ingredients: IngredientApiObject[],
  instructions: InstructionApiObject[]
};

type IngredientApiObject = {
  text: string
};
type InstructionApiObject = {
  text: string
};
