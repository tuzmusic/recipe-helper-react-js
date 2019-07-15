// @flow
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";

export default class Recipe {
  title: string;
  slug: string;
  id: number;
  steps: Object[];
  ingredients: Ingredient[];
  instructions: Instruction[];

  static create(obj: RecipeObject): Recipe {
    const recipe = new Recipe();
    recipe.ingredients = obj.ingredientsText
      .split("\n")
      .map(i => new Ingredient(i.trim()));
    recipe.instructions = obj.instructionsText
      .split("\n")
      .map(i => new Instruction(i.trim()));
    return recipe;
  }
}

type RecipeObject = {
  title: string,
  ingredientsText: string,
  instructionsText: string
};
