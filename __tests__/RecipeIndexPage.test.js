// @flow
import React from "react";
import { shallow, mount } from "enzyme";
import recipes from "../src/api-data/recipes";

import { RecipeIndexPage } from "../src/screens/RecipeIndexPage/RecipeIndexPage";
import { RecipeList } from "../src/screens/RecipeIndexPage/RecipeList";

describe("Recipe Index Page", () => {
  const wrapper = mount(<RecipeIndexPage recipes={recipes} />);
  it("should show the collection of recipes", () => {
    expect(wrapper.find("li").length).toEqual(2);
  });
});

describe("RecipeList", () => {
  const wrapper = mount(<RecipeList recipes={recipes} />);
  it("should show the collection of recipes", () => {
    expect(wrapper.find("li").length).toEqual(2);
  });
});
