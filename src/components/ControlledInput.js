// @flow
import React, { Component } from "react";
type Props = {
  containerStyle?: Object,
  labelStyle?: Object,
  inputStyle?: Object,
  label: string,
  propName?: string,
  state: Object,
  onChange?: Object => void,
  textArea?: boolean,
  setterFn?: (key: string, value: mixed) => void
};

export function setterFn(key: string, value: mixed) {
  this.setState({ [key]: value });
}

class ControlledInput extends Component<Props> {
  render() {
    const props = this.props;
    const propertyName = props.propName || props.label.toLowerCase();
    const TagType = props.textArea ? "textarea" : "input";
    // only pass valid props to DOM element (remove any problematic custom props)
    const {
      setterFn,
      propName,
      textArea,
      state,
      containerStyle,
      inputStyle,
      ...domProps
    } = props;
    return (
      <div style={props.containerStyle}>
        <label for={props.label} style={props.labelStyle}>
          {props.label}
        </label>
        <TagType
          {...domProps}
          style={props.inputStyle}
          id={props.label}
          label={props.label} // actually could get passed automatically, but it's important so I'm leaving it in the code
          onChange={
            this.props.onChange ||
            (setterFn ? e => setterFn(propertyName, e.target.value) : null)
          }
          value={state[propertyName] || ""}
        ></TagType>
      </div>
    );
  }
}

export default ControlledInput;
