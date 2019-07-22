import React from "react";
import { render, fireEvent, route } from "../../test-utils";
import App from "../../src/App";

describe("App Container", () => {
  let container, getByText;
  beforeEach(() => {
    const component = route(<App />);
    container = component.container;
    getByText = component.getByText;
  });

  it("should show links to the pages of the site", () => {
    expect(container.innerHTML).toMatch("Recipes</a>");
    expect(container.innerHTML).toMatch("New Recipe</a>");
  });
  it("should default to the index page", () => {
    expect(container.innerHTML).toContain("Chocolate Chip Cookies");
  });
  it("should navigate to a recipe", () => {
    const cookiesLink = getByText(/cookies/i);
    expect(cookiesLink).toBeDefined();
    fireEvent.click(cookiesLink);
    expect(getByText("Instructions")).toBeDefined();
    expect(getByText("Ingredients")).toBeDefined();
  });
});
