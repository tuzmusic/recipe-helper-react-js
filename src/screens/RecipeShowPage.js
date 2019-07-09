import React, { Component } from "react";
import { connect } from "react-redux";
import CookView from "../containers/CookView";

export class RecipeShowPage extends Component {
  render() {
    const recipe = this.props.recipes.find(r => {
      console.log(r);

      return r.id === this.props.match.params.id;
    });
    console.log(this.props.match.params);

    return <CookView recipe={recipe} />;
  }
}
export default connect(({ recipes }) => ({ recipes: recipes.recipes }))(
  RecipeShowPage
);
