// @flow
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import * as URLs from "../../src/constants/urls";
import RecipeController from "../api/RecipeController";

export function startMockServer() {
  const mock = new MockAdapter(axios);
  mock.onPost(URLs.createRecipe).reply(async ({ data }) => {
    const recipe = await JSON.parse(data);
    return [200, RecipeController.create(recipe)];
  });
}
