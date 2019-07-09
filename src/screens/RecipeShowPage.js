import React, { Component } from "react";
import { connect } from "react-redux";
import CookView from "../containers/CookView";

export class RecipeShowPage extends Component {
  render() {
    const recipe = this.props.recipes.find(
      r => r.id === this.props.match.params.id
    );

    return <CookView recipe={recipe} />;
  }
}
export default connect(({ recipes }) => ({ recipes: recipes.recipes }))(
  RecipeShowPage
);
