import React from "react";
import { render, fireEvent, route } from "../../test-utils";
import App from "../../src/App";

describe("App Container", () => {
  it("should show links to the pages of the site", () => {
    const { container, getByText } = route(<App />);
    expect(container.innerHTML).toMatch("Cook</a>");
    expect(container.innerHTML).toMatch("New Recipe</a>");
  });
});
