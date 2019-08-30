// @flow
import Recipe from "../models/Recipe";

export type RecipesState = { recipes: Recipe[] };

export type GET_RECIPES_SUCCESS = {
  type: "GET_RECIPES_SUCCESS",
  recipes: Recipe[]
};
export type GET_RECIPES_START = { type: "GET_RECIPES_START" };
export type CREATE_RECIPE_START = {
  type: "CREATE_RECIPE_START",
  recipeObj: Object
};
export type CREATE_RECIPE_SUCCESS = {
  type: "CREATE_RECIPE_SUCCESS",
  recipe: Recipe
};
export type RecipeAction =
  | GET_RECIPES_SUCCESS
  | GET_RECIPES_START
  | CREATE_RECIPE_START
  | CREATE_RECIPE_SUCCESS;
