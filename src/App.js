import React from "react";
import CookView from "./containers/CookView";

const recipe = require("./api-data/recipes/chocolate-chip-cookies.json");

const App = () => {
  return <CookView recipe={recipe} />;
};

export default App;
