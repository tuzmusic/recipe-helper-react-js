import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  cleanup
} from "@testing-library/react";
import { withRouter } from "react-router";
import { Link, Route, Router, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";

export * from "@testing-library/react";

export function route(
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) {
  return { ...render(<Router history={history}>{ui}</Router>), history };
}
