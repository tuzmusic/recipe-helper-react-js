import React from "react";
import { render, fireEvent, route } from "../../test-utils";
import { RecipeIndexPage as Index } from "../../src/screens/RecipeIndexPage/RecipeIndexPage";
import recipes from "../../src/api-data/recipes";

describe("Recipe Index Page", () => {
  it("should render the index page with the list of recipes", () => {
    const { container, getByText } = route(<Index recipes={recipes} />);
    expect(container.innerHTML).toMatch("Recipes");
    expect(container.innerHTML).toContain("Chocolate Chip Cookies");
  });
  xit("should navigate to a recipe", () => {
    const { container, getByText } = route(<Index recipes={recipes} />);
    const cookiesLink = getByText(/cookies/i);
    expect(cookiesLink).toBeDefined();
    fireEvent.click(cookiesLink);
    expect(getByText(/Mix ingredients/)).toExist();
  });
});
