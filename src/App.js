// @flow
import React from "react";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import recipes from "../src/redux/reducers/recipesReducer";
import RecipeShowPage from "./screens/RecipeShowPage";

const combinedReducer = combineReducers({ recipes });
const sagaMiddleware = createSagaMiddleware();
const store = createStore(combinedReducer, {}, applyMiddleware(sagaMiddleware));

export const App = () => {
  return (
    <Provider store={store}>
      <RecipeShowPage />
    </Provider>
  );
};

export default App;
