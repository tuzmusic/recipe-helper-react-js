// @flow
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RecipeIndexPage from "./RecipeIndexPage/RecipeIndexPage";
import NewRecipePage from "./NewRecipePage/NewRecipePage";
import { getRecipes } from "../redux/actions/recipeActions";
import { connect } from "react-redux";

const Header = props => {
  return (
    <header style={styles.header}>
      <ul>
        <li>
          <Link to="/">Recipes</Link>
        </li>
        {/* <li>
          <Link to="/recipes/new">New Recipe</Link>
        </li> */}
      </ul>
    </header>
  );
};

class AppContainer extends Component<Object> {
  componentDidMount() {
    this.props.getRecipes();
  }

  render() {
    return (
      <Router>
        <div style={styles.appContainer}>
          <RecipeIndexPage />
          {/* <Header />
          <Route exact path="/" component={RecipeIndexPage} />
          <Route exact path="/recipes/new" component={NewRecipePage} /> */}
        </div>
      </Router>
    );
  }
}

export default connect(
  null,
  { getRecipes }
)(AppContainer);

const styles = {
  header: { backgroundColor: "blue", padding: 10 },
  appContainer: {
    flex: 1,
    backgroundColor: "navy",
    color: "white"
  }
};
