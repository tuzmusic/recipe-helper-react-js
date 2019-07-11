// @flow
import React, { Component } from "react";
import ControlledInput from "../../components/ControlledInput";

type Props = Object;
type State = {
  title: string,
  ingredients: string,
  instructions: string
};
export class NewRecipePage extends Component<Props, State> {
  render() {
    const CI = props => <ControlledInput binder={this} {...props} />;
    return (
      <div style={styles.container}>
        <h1>NEW RECIPE</h1>
        <CI label="Title" />
      </div>
    );
  }
}

export default NewRecipePage;

const styles = { container: { padding: 20 } };
