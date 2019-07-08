// @flow
import type Recipe from "../../models/Recipe";

export default function recipesReducer(state: State, action: RecipeAction) {
  switch (action.type) {
    case "GET_RECIPES_SUCCESS":
      return { ...state, recipes: action.recipes };
  }
  return state;
}

type State = { recipes: Recipe[] };

type RecipeAction =
  | { type: "GET_RECIPES_START" }
  | { type: "GET_RECIPES_SUCCESS", recipes: Recipe[] }
  | { type: "GET_RECIPES_FAILURE", error: Error };
