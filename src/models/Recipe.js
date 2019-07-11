// @flow
import Ingredient from "./Ingredient";

export default class Recipe {
  title: string;
  slug: string;
  id: number;
  steps: Object[];
  ingredients: Ingredient[];
}
