// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import CookView from "./CookView/CookView";
import type Recipe from "../../models/Recipe";

type Props = { recipes: Recipe[], match: Object };

export class RecipeShowPage extends Component<Props> {
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