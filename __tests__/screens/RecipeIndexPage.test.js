import React from "react";
import { render, fireEvent, route } from "../../test-utils";
import { RecipeIndexPage } from "../../src/screens/RecipeIndexPage/RecipeIndexPage";
import recipes from "../../src/api-data/recipes";

describe("Recipe Index Page", () => {
  let container, getByText;
  beforeEach(() => {
    const component = route(<RecipeIndexPage recipes={recipes} />);
    container = component.container;
    getByText = component.getByText;
  });
  it("should render the index page with the list of recipes", () => {
    expect(container.innerHTML).toMatch("Recipes");
    expect(container.innerHTML).toContain("Chocolate Chip Cookies");
  });
  xit("should navigate to a recipe", () => {
    // NO IT SHOULDN'T
    // The index page is not the app container page!

    const cookiesLink = getByText(/cookies/i);
    expect(cookiesLink).toBeDefined();
    // fireEvent.click(cookiesLink);
    // expect(getByText(/Mix ingredients/)).toExist();
  });
});
