import React from "react";
import { shallow, mount } from "enzyme";
import recipes from "../src/api-data/recipes";
import { App } from "../src/App";

describe("App routing", () => {
  const wrapper = mount(<App />);
  const links = wrapper.find("a");
  it("should show the collection of recipes", () => {
    expect(links.length).toEqual(2);
  });
  it("should navigate to the recipe show page when a recipe is clicked", () => {
    links.at(0).simulate("click");
    expect(wrapper.find("#recipe-title").text()).toEqual(
      "Chocolate Chip Cookies"
    );
  });
});
