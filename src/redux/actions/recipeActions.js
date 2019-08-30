// @flow
import * as Types from "../RecipeTypes";
import mockRecipes from "../../api-data/recipes";

export function getRecipes(): Types.GET_RECIPES_START {
  // For mocking:
  const recipes = mockRecipes.map(r => Recipe.fromApi(r));

  return { type: "GET_RECIPES_SUCCESS", recipes };
  // For real:
  // return { type: "GET_RECIPES_START" };
}
