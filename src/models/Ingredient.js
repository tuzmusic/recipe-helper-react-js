// @flow

export default class Ingredient {
  text: string;

  constructor(arg: PotentialConstructorArgument) {
    if (typeof arg === "string") this.text = arg;
    else if (typeof arg === "object") {
      this.text = arg.text;
    }
  }
}

type PotentialConstructorArgument = string | { text: string };
