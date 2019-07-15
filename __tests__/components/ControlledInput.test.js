// @flow
import React, { Component } from "react";
import { render, fireEvent } from "../../test-utils";
import { mount } from "enzyme";
import ControlledInput, {
  setterFn
} from "../../src/components/ControlledInput";

class Wrapper extends Component<Object, Object> {
  state = {};
  render() {
    const p = { state: this.state, setterFn: setterFn.bind(this) };
    return <ControlledInput {...p} {...this.props.inputProps} />;
  }
}

const renderWithProps = props => render(<Wrapper inputProps={props} />);

const val = text => ({ target: { value: text } });

describe("ControlledInput", () => {
  const label = "Text";
  const { container } = renderWithProps({ label });
  const input = container.querySelector("input");

  it("should display a label based on the label prop", () => {
    expect(container.innerHTML).toMatch(label);
  });

  it("should update the state and display its value when the text is changed", () => {
    fireEvent.input(input, val("things"));
    expect(input).toHaveValue("things");
  });

  it("should accept a propName different from the label", () => {
    const propName = "otherName";
    const wrapper = mount(<Wrapper inputProps={{ propName, label }} />);
    wrapper.find("input").simulate("change", val("Hello"));
    expect(wrapper.state()).toEqual({ otherName: "Hello" });
  });

  it("should be configurable as a text area", () => {
    const { container } = renderWithProps({ label, textArea: true });
    const area = container.querySelector("textarea");
    fireEvent.input(area, val("things")); // implicitly asserts the textarea's existence
    expect(area).toHaveValue("things");
  });

  it("should take a custom onChange method", () => {
    let x = false;
    const onChange = () => (x = true);
    const { container } = renderWithProps({ label, onChange });
    fireEvent.input(container.querySelector("input"), val("whatever"));
    expect(x).toBe(true);
    // should probably test that setterFn wasn't called, or something like that?
  });

  it("can pass along any other props", () => {
    const { getByTestId } = renderWithProps({
      "data-testid": "input",
      placeholder: "some text",
      label: "whatever"
    });
    expect(getByTestId("input")).toHaveAttribute("placeholder", "some text");
  });
});
