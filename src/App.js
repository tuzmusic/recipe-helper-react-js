// @flow
import React from "react";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import recipes from "../src/redux/reducers/recipesReducer";
import RecipeShowPage from "./screens/RecipeShowPage";
import RecipeIndexPage from "./screens/RecipeIndexPage/RecipeIndexPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const combinedReducer = combineReducers({ recipes });
const sagaMiddleware = createSagaMiddleware();
const store = createStore(combinedReducer, {}, applyMiddleware(sagaMiddleware));

export const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;

const styles = {
  appContainer: {
    flex: 1,
    backgroundColor: "navy",
    color: "white"
  }
};
