// @flow
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RecipeShowPage from "./RecipeShowPage/RecipeShowPage";
import RecipeIndexPage from "./RecipeIndexPage/RecipeIndexPage";
import { connect } from "react-redux";
import RecipeList from "./RecipeIndexPage/RecipeList";

class AppContainer extends Component<Object> {
  render() {
    return <RecipeIndexPage />;
  }
}

export default AppContainer;

const styles = {
  appContainer: {
    flex: 1,
    backgroundColor: "navy",
    color: "white"
  }
};
