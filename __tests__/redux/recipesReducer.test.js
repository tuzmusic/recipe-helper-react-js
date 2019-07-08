// @flow
import recipesReducer from "../../src/redux/reducers/recipesReducer";

describe("recipe reducer", () => {
  const initialState = { recipes: [] };
  it("should return an initial state", () => {
    expect(recipesReducer(initialState, { type: "GET_RECIPES_START" })).toEqual(
      initialState
    );
  });
});
