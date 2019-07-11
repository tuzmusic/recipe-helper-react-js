// @flow
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecipeIndexPage from "./RecipeIndexPage/RecipeIndexPage";
import NewRecipePage from "./NewRecipePage/NewRecipePage";
import { connect } from "react-redux";
import RecipeList from "./RecipeIndexPage/RecipeList";

class AppContainer extends Component<Object> {
  render() {
    return (
      <Router>
        <div style={styles.appContainer}>
          <Header />
          <Route exact path="/" component={RecipeIndexPage} />
          <Route exact path="/recipes/new" component={NewRecipePage} />
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
  header: { backgroundColor: "blue", padding: 10 },
  appContainer: {
    flex: 1,
    backgroundColor: "navy",
    color: "white"
  }
};
