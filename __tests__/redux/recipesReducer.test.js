// @flow
import recipesReducer from "../../src/redux/reducers/recipesReducer";

describe("recipe reducer", () => {
  const initialState = { recipes: [] };
  it("should return an initial state", () => {
    expect(recipesReducer(initialState, {})).toEqual(initialState);
  });
});
