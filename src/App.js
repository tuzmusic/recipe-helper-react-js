// @flow
import React from "react";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import recipes from "../src/redux/reducers/recipesReducer";
import RecipeShowPage from "./screens/RecipeShowPage";
import RecipeIndexPage from "./screens/RecipeIndexPage/RecipeIndexPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppContainer from "./screens/AppContainer";

const combinedReducer = combineReducers({ recipes });
const sagaMiddleware = createSagaMiddleware();
const store = createStore(combinedReducer, {}, applyMiddleware(sagaMiddleware));

export const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
