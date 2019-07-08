// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import Recipe from "../../models/Recipe";
import RecipeList from "./RecipeList";

type Props = { recipes: Recipe[] };

export class RecipeIndexPage extends Component<Props> {
  render() {
    return <RecipeList recipes={this.props.recipes} />;
  }
}
export default connect(({ recipes }) => ({ recipes: recipes.recipes }))(
  RecipeIndexPage
);
