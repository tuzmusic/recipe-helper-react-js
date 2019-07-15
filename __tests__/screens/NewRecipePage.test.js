import React from "react";
import { render, fireEvent, route } from "../../test-utils";
import NewRecipePage from "../../src/screens/NewRecipePage/NewRecipePage";

fdescribe("New Recipe Page", () => {
  function inputCalled(name) {
    return `<input label="${name}"`;
  }
  const $ = document.querySelector;
  it("has a recipe form", () => {
    const { getByText, getByLabelText } = route(<NewRecipePage />);
    expect(getByLabelText("Title")).toBeDefined();
    expect(getByLabelText("Ingredients")).toBeDefined();
    expect(getByLabelText("Instructions")).toBeDefined();
  });
  it("has a save button", () => {
    expect(getByText("Save Recipe")).toBeDefined();
  });
});
