import React from "react";

const InstructionsList = ({ steps, currentStep }) => {
  return (
    <div className="instructions-list">
      <h3>Instructions</h3>
      <ol>
        {steps.map((step, i) => (
          <li className={i === currentStep ? "bold" : ""} key={i}>
            {step.text}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default InstructionsList;
