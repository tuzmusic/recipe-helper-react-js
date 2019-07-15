// @flow
import Ingredient from "./Ingredient";
import Instruction from "./Instruction";

export default class Recipe {
  title: string;
  slug: string;
  id: number;
  ingredients: Ingredient[];
  instructions: Instruction[];
}
