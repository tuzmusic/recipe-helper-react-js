import React from "react";
import { render, fireEvent, route } from "../../test-utils";
import NewRecipePage from "../../src/screens/NewRecipePage/NewRecipePage";

fdescribe("New Recipe Page", () => {
  const Page = route(<NewRecipePage />);
  function inputCalled(name) {
    return `<input label="${name}"`;
  }
  const $ = document.querySelector;
  it("has a recipe form", () => {
    const { getByLabelText } = route(<NewRecipePage />);
    expect(getByLabelText("Title")).toBeDefined();
    expect(getByLabelText("Tngredients")).toBeDefined();
    expect(getByLabelText("Tnstructions")).toBeDefined();
  });
});
