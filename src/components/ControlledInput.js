// @flow
import React, { Component } from "react";
type Props = {
  containerStyle?: Object,
  label: string,
  propName?: string,
  binder: Component<Object, Object>,
  onChange?: Object => void,
  textArea?: boolean
};

class ControlledInput extends Component<Props> {
  render() {
    const props = this.props;
    const propName = props.propName || props.label.toLowerCase();
    const TagType = props.textArea ? "textarea" : "input";
    return (
      <div style={props.containerStyle}>
        <p>{props.label}</p>
        <TagType
          label={props.label}
          onChange={
            this.props.onChange ||
            (e => {
              props.binder.setState({ [propName]: e.target.value });
            })
          }
          value={props.binder.state[propName] || ""}
        ></TagType>
      </div>
    );
  }
}

export default ControlledInput;
