import React from "react";
import { withRouter } from "react-router";
import { Link, Route, Router, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
import {
  render,
  fireEvent,
  waitForElement,
  cleanup
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RecipeIndexPage as Index } from "../../src/screens/RecipeIndexPage/RecipeIndexPage";
import recipes from "../../src/api-data/recipes";

afterEach(cleanup);

function route(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return { ...render(<Router history={history}>{ui}</Router>), history };
}

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
