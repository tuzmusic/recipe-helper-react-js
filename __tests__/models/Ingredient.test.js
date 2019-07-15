import Ingredient from "../../src/models/Ingredient";

describe("constructor", () => {
  it("can create an ingredient with a text argument", () => {
    expect(new Ingredient("apples")).toHaveProperty("text", "apples");
  });
});
