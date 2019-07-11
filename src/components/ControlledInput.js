// @flow
import React, { Component } from "react";
type Props = {
  containerStyle?: Object,
  label: string,
  propName?: string,
  binder: Component<Object, Object>
};

class ControlledInput extends Component<Props> {
  render() {
    const props = this.props;
    return (
      <div style={props.containerStyle}>
        <p>{props.label}</p>
        <input
          type="text"
          label={props.label}
          onTextChange={text => {
            props.binder.setState({ [props.propName || props.label]: text });
          }}
        ></input>
      </div>
    );
  }
}

export default ControlledInput;
