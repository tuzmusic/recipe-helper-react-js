// @flow
import React from "react";
import { shallow, mount } from "enzyme";
import { RecipeShowPage } from "../../src/screens/RecipeShowPage/RecipeShowPage";
import recipes from "../../src/api-data/recipes";
import { render, fireEvent, route } from "../../test-utils";

describe("Recipe Show Page", () => {
  const recipe = recipes[0];

  let container, getByText;

  beforeEach(() => {
    const component = render(
      <RecipeShowPage recipe={recipe} match={{ params: { id: "1" } }} />
    );
    container = component.container;
    getByText = component.getByText;
  });

  it("should show a recipe", () => {
    expect(getByText("Chocolate Chip Cookies")).toBeDefined();
  });

  it("should show the ingredients", () => {
    expect(getByText("1 cup of flour")).toBeDefined();
  });
});
