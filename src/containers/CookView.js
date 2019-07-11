import React, { Component } from "react";
import RecipeSummary from "../screens/RecipeSummary";
import RecipeSession from "../screens/RecipeSession";

class CookView extends Component {
  state = { currentStep: 0 };

  nextStep() {
    console.log("from next", this.state.currentStep);
    if (this.state.currentStep + 1 === this.props.recipe.steps.length) return;
    this.setState({ currentStep: this.state.currentStep + 1 });
  }

  prevStep() {
    console.log("from prev", this.state.currentStep);

    if (this.state.currentStep === 0) return;
    this.setState({ currentStep: this.state.currentStep - 1 });
  }

  render() {
    return (
      <div className="cook-view">
        <RecipeSummary
          recipe={this.props.recipe}
          currentStep={this.state.currentStep}
        />
        <RecipeSession
          recipe={this.props.recipe}
          currentStep={this.state.currentStep}
          onNextClick={this.nextStep.bind(this)}
          onPrevClick={this.prevStep.bind(this)}
        />
      </div>
    );
  }
}

export default CookView;
