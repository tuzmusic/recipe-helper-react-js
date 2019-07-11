import React from "react";
import { shallow, mount } from "enzyme";
import IngredientList from "../../src/screens/RecipeShowPage/CookView/RecipeSummary/IngredientsList";

describe("<IngredientList/>", function() {
  const ingredients = [
    { text: "apples" },
    { text: "bananas" },
    { text: "peanut butter" }
  ];
  it("should display the ingredients in <li> tags", () => {
    const wrapper = shallow(<IngredientList ingredients={ingredients} />);
    expect(wrapper.find("li").length).toEqual(3);
  });
});
