// @flow
import type Recipe from "../../models/Recipe";
import mockRecipes from "../../api-data/recipes";

type State = { recipes: Recipe[] };

type RecipeAction =
  | { type: "GET_RECIPES_START" }
  | { type: "GET_RECIPES_SUCCESS", recipes: Recipe[] }
  | { type: "GET_RECIPES_FAILURE", error: Error };

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
    default:
      return state;
  }
}
