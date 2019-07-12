// @flow
import React, { Component } from "react";
type Props = {
  containerStyle?: Object,
  labelStyle?: Object,
  label: string,
  propName?: string,
  setState: Object => mixed,
  state: Object,
  onChange?: Object => void,
  textArea?: boolean
};

class ControlledInput extends Component<Props> {
  render() {
    const props = this.props;
    const propertyName = props.propName || props.label.toLowerCase();
    const TagType = props.textArea ? "textarea" : "input";
    // only pass valid props to DOM element (remove any custom props)
    const { propName, setState, textArea, ...domProps } = props;
    return (
      <div style={props.containerStyle}>
        <p style={props.labelStyle}>{props.label}</p>
        <TagType
          {...domProps}
          label={props.label} // actually could get passed automatically, but it's important so I'm leaving it in the code
          onChange={
            this.props.onChange ||
            (e => {
              this.props.setState({ [propertyName]: e.target.value });
            })
          }
          value={props.state[propertyName] || ""}
        ></TagType>
      </div>
    );
  }
}

export default ControlledInput;
