// @flow
import React, { Component } from "react";
type Props = {
  containerStyle?: Object,
  label: string,
  propName?: string,
  binder: Component<Object, Object>,
  onChange?: Object => void
};

class ControlledInput extends Component<Props> {
  render() {
    const props = this.props;
    const propName = props.propName || props.label.toLowerCase();

    return (
      <div style={props.containerStyle}>
        <p>{props.label}</p>
        <input
          type="text"
          label={props.label}
          onChange={
            this.props.onChange ||
            (e => {
              props.binder.setState({ [propName]: e.target.value });
            })
          }
          value={props.binder.state[propName]}
        ></input>
      </div>
    );
  }
}

export default ControlledInput;
