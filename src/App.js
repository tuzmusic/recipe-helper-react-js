// @flow
import React from "react";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import recipes from "../src/redux/reducers/recipesReducer";
import RecipeShowPage from "./screens/RecipeShowPage";
import RecipeIndexPage from "./screens/RecipeIndexPage/RecipeIndexPage";

const combinedReducer = combineReducers({ recipes });
const sagaMiddleware = createSagaMiddleware();
const store = createStore(combinedReducer, {}, applyMiddleware(sagaMiddleware));

export const App = () => {
  return (
    <Provider store={store}>
      <div style={styles.appContainer}>
        <RecipeIndexPage />
      </div>
    </Provider>
  );
};

export default App;

const styles = {
  appContainer: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: "navy",
    color: "white"
  }
};
