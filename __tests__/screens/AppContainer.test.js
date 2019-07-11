import React from "react";
import { render, fireEvent, route } from "../../test-utils";
import App from "../../src/App";

describe("App Container", () => {
  it("should run", () => {
    const { container, getByText } = route(<App />);
    expect(container.innerHTML).toMatch("Cook</a>");
    expect(container.innerHTML).toMatch("New Recipe</a>");
  });
});
