import React from "react";
import { render, fireEvent, route } from "../../test-utils";
import NewRecipePage from "../../src/screens/NewRecipePage/NewRecipePage";

describe("New Recipe Page", () => {
  let $;
  beforeEach(() => {
    $ = route(<NewRecipePage />);
  });
  describe("the page", () => {
    it("has a recipe form", () => {
      expect($.getByLabelText("Title")).toBeDefined();
      expect($.getByLabelText("Ingredients")).toBeDefined();
      expect($.getByLabelText("Instructions")).toBeDefined();
    });
    it("has a save button", () => {
      expect($.getByText("Save Recipe")).toBeDefined();
    });
  });

  describe("operation", () => {
    it("creates a recipe", () => {});
  });
});
