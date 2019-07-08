import React, { Component } from "react";
import { connect } from "react-redux";
import CookView from "../containers/CookView";

export class RecipeShowPage extends Component {
  render() {
    return <CookView recipe={this.props.recipe} />;
  }
}
export default connect(({ recipes }) => ({ recipe: recipes.recipes[0] }))(
  RecipeShowPage
);
