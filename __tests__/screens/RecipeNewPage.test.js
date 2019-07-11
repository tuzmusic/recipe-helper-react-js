import React from "react";
import { render, fireEvent, route } from "../../test-utils";
import NewRecipePage from "../../src/screens/NewRecipePage/NewRecipePage";

fdescribe("New Recipe Page", () => {
  const Page = route(<NewRecipePage />);
  function inputCalled(name) {
    return `<input label="${name}"`;
  }
  it("has a recipe form", () => {
    const { container, getByText } = route(<NewRecipePage />);
    expect(container.innerHTML).toMatch(inputCalled("title"));
    expect(container.innerHTML).toMatch(inputCalled("ingredients"));
    expect(container.innerHTML).toMatch(inputCalled("instructions"));
  });
});
