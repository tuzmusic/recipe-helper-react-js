// @flow
import recipesReducer from "../../src/redux/reducers/recipesReducer";
import Recipe from "../../src/models/Recipe";

describe("recipe reducer", () => {
  const initialState = { recipes: [] };
  it("should return an initial state", () => {
    expect(recipesReducer(initialState, { type: "GET_RECIPES_START" })).toEqual(
      initialState
    );
  });

  it("add recipes from a successful fetch", () => {
    const recipes = Array(5).fill(new Recipe());
    expect(
      recipesReducer(initialState, { type: "GET_RECIPES_SUCCESS", recipes })
    ).toEqual({ recipes });
  });

  it("should add a new recipe", () => {
    const recipe = new Recipe();
    expect(
      recipesReducer(initialState, { type: "CREATE_RECIPE_SUCCESS", recipe })
    ).toEqual({ recipes: [recipe] });
  });
});
