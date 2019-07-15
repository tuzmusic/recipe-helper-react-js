// @flow
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";

export default class Recipe {
  title: string;
  slug: string;
  id: number;
  ingredients: Ingredient[];
  instructions: Instruction[];

  static fromApi(obj: RecipeApiObject): Recipe {
    const recipe = new Recipe();
    recipe.ingredients = obj.ingredients.map(i => new Ingredient(i));
    recipe.instructions = obj.instructions.map(i => new Instruction(i));
    return recipe;
  }
}
export type RecipeApiObject = {
  title: string,
  slug: string,
  id: number,
  ingredients: IngredientApiObject[],
  instructions: InstructionApiObject[]
};

export type IngredientApiObject = {
  text: string
};
export type InstructionApiObject = {
  text: string
};
