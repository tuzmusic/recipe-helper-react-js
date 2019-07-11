// @flow
import React from "react";
import { shallow, mount } from "enzyme";
import { RecipeShowPage } from "../../src/screens/RecipeShowPage/RecipeShowPage";
import recipes from "../../src/api-data/recipes";

describe("Recipe Show Page", () => {
  const recipe = recipes[0];
  const wrapper = mount(
    <RecipeShowPage recipes={recipes} match={{ params: { id: "1" } }} />
  );
  it("should show a recipe", () => {
    expect(wrapper.find("#recipe-title").text()).toEqual(
      "Chocolate Chip Cookies"
    );
  });
});
