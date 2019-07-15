// @flow
import React, { Component } from "react";
import ControlledInput, { setterFn } from "../../components/ControlledInput";

type Props = Object;
type State = {
  title: string,
  ingredients: string,
  instructions: string
};
export class NewRecipePage extends Component<Props, State> {
  state = {
    title: "",
    ingredients: "",
    instructions: ""
  };
  render() {
    const p = {
      state: this.state,
      setterFn: setterFn.bind(this),
      inputStyle: styles.input,
      containerStyle: styles.inputContainer,
      rows: 10
    };
    return (
      <div style={styles.container}>
        <h1>NEW RECIPE</h1>
        <ControlledInput {...p} label="Title" />
        <ControlledInput {...p} label="Ingredients" textArea />
        <ControlledInput {...p} label="Instructions" textArea />
      </div>
    );
  }
}

export default NewRecipePage;

const styles = {
  container: {
    padding: 20
  },
  inputContainer: {
    width: "50%",
    minWidth: Math.min(window.innerWidth * 0.9, 500)
  },
  input: {
    width: "100%"
  }
};
