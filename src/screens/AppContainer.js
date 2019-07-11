// @flow
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecipeIndexPage from "./RecipeIndexPage/RecipeIndexPage";
import { connect } from "react-redux";
import RecipeList from "./RecipeIndexPage/RecipeList";

class AppContainer extends Component<Object> {
  render() {
    return (
      <Router>
        <div style={styles.appContainer}>
          <Header />
          <Route exact path="/" component={RecipeIndexPage} />
        </div>
      </Router>
    );
  }
}

export default AppContainer;

const Header = props => {
  return (
    <header style={styles.header}>
      <ul>
        <li>
          <Link to="/">Cook</Link>
        </li>
        <li>
          <Link to="/recipes/new">New Recipe</Link>
        </li>
      </ul>
    </header>
  );
};

const styles = {
  header: { backgroundColor: "blue" },
  appContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "navy",
    color: "white"
  }
};
