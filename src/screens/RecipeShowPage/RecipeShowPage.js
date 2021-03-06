// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import CookView from "./CookView/CookView";
import type Recipe from "../../models/Recipe";

type Props = { recipe: Recipe };

export class RecipeShowPage extends Component<Props> {
  render() {
    return <CookView recipe={this.props.recipe} />;
  }
}
export default connect(({ recipes }, { match }) => () => {
  return { recipe: recipes.recipes.find(r => r.id === match.params.id) };
})(RecipeShowPage);
