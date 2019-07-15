import Instruction from "../../src/models/Instruction";

describe("constructor", () => {
  it("can create an instruction with a text argument", () => {
    expect(new Instruction("do something")).toHaveProperty(
      "text",
      "do something"
    );
  });
});
