// @flow
import Recipe from "../../models/Recipe";
import mockRecipes from "../../api-data/recipes";
import * as Types from "../RecipeTypes";

type RecipeAction =
  | { type: "GET_RECIPES_START" | "CREATE_RECIPE_START" }
  | { type: "GET_RECIPES_SUCCESS", recipes: Recipe[] }
  | { type: "CREATE_RECIPE_SUCCESS", recipe: Recipe }
  | { type: "GET_RECIPES_FAILURE" | "CREATE_RECIPE_FAILURE", error: Error };

const recipes = mockRecipes.map(r => Recipe.fromApi(r));

const initialState: Types.RecipesState = {
  // recipes: mockRecipes,
  recipes: []
};

export default function recipesReducer(
  state: Types.RecipesState = initialState,
  action: Types.RecipeAction
): Types.RecipesState {
  switch (action.type) {
    case "GET_RECIPES_SUCCESS":
      return { ...state, recipes: action.recipes };
    case "CREATE_RECIPE_SUCCESS":
      return { ...state, recipes: [...state.recipes, action.recipe] };
    default:
      return state;
  }
}
