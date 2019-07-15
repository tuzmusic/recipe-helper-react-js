// @flow
import type Recipe from "../../models/Recipe";
import mockRecipes from "../../api-data/recipes";

type State = { recipes: Recipe[] };

type RecipeAction =
  | { type: "GET_RECIPES_START" | "CREATE_RECIPE_START" }
  | { type: "GET_RECIPES_SUCCESS", recipes: Recipe[] }
  | { type: "CREATE_RECIPE_SUCCESS", recipe: Recipe }
  | { type: "GET_RECIPES_FAILURE" | "CREATE_RECIPE_FAILURE", error: Error };

const initialState: State = {
  recipes: mockRecipes
};

export default function recipesReducer(
  state: State = initialState,
  action: RecipeAction
): State {
  switch (action.type) {
    case "GET_RECIPES_SUCCESS":
      return { ...state, recipes: action.recipes };
    case "CREATE_RECIPE_SUCCESS":
      return { ...state, recipes: [...state.recipes, action.recipe] };
    default:
      return state;
  }
}
