// @flow

export default class Instruction {
  text: string;
  completed: boolean;

  constructor(arg: PotentialConstructorArgument) {
    if (typeof arg === "string") this.text = arg;
    else if (typeof arg === "object") {
      this.text = arg.text;
    }
  }
}

type PotentialConstructorArgument = string | { text: string };
