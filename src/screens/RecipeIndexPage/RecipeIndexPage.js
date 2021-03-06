// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import Recipe from "../../models/Recipe";
import RecipeList from "./RecipeList";
import RecipeShowPage from "../RecipeShowPage/RecipeShowPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

type Props = { recipes: Recipe[] };

export class RecipeIndexPage extends Component<Props> {
  render() {
    console.log(this.props.recipes);
    return (
      <Router>
        <Route
          exact
          path="/"
          render={() => <RecipeList recipes={this.props.recipes} />}
        />
        <Route
          path="/recipes/:id/:slug"
          render={routerProps => {
            return <RecipeShowPage {...routerProps} />;
          }}
        />
      </Router>
    );
  }
}
export default connect(({ recipes }) => ({ recipes: recipes.recipes }))(
  RecipeIndexPage
);
