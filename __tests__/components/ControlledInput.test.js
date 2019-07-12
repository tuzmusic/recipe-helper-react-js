import React, { Component } from "react";
import { render, fireEvent } from "../../test-utils";
import ControlledInput from "../../src/components/ControlledInput";

class Wrapper extends Component {
  state = { text: "" };
  render() {
    return (
      <div>
        <ControlledInput binder={this} {...this.props.inputProps} />
      </div>
    );
  }
}

function renderWithProps(props) {
  return render(<Wrapper inputProps={props} />);
}

describe("ControlledInput", () => {
  const propName = "Text";
  const { container, getByText, getByTestId } = renderWithProps({
    label: propName
  });
  const input = container.querySelector("input");
  it("should display a label based on the label prop", () => {
    expect(container.innerHTML).toMatch(propName);
  });
  it("should update the state and display its value when the text is changed", () => {
    fireEvent.input(input, { target: { value: "things" } });
    expect(input).toHaveValue("things");
  });
  xit("should be configurable as a text area", () => {
    expect;
  });
  xit("should take a custom onChange method", () => {});
});
