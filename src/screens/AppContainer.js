// @flow
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RecipeShowPage from "./RecipeShowPage";
import RecipeIndexPage from "./RecipeIndexPage/RecipeIndexPage";

export class AppContainer extends Component<Object> {
  render() {
    return (
      <div>
        <div style={styles.appContainer}>
          <Router>
            <Route exact path="/" component={RecipeIndexPage} />
            <Route
              path="/recipes/:id/:slug"
              render={routerProps => {
                return <RecipeShowPage {...routerProps} />;
              }}
            />
          </Router>
        </div>
      </div>
    );
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
