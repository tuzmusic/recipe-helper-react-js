import React from "react";
import { render, fireEvent, cleanup, route } from "../../test-utils";
import "@testing-library/jest-dom/extend-expect";
import { RecipeIndexPage as Index } from "../../src/screens/RecipeIndexPage/RecipeIndexPage";
import recipes from "../../src/api-data/recipes";

afterEach(cleanup);

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

  it("should have links to different parts of the app", () => {
    const { container, getByText } = route(<Index recipes={recipes} />);
    expect(container.innerHTML).toMatch("Cook</a>");
    expect(container.innerHTML).toMatch("New Recipe</a>");
  });
});
