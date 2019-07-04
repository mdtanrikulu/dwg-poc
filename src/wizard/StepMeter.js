import React, { Component } from "react";

class StepMeter extends Component {

    render() {
        const { currentStep, steps } = this.props;
        return (
            <div className="App-stepmeter">
                <progress
                    className="progressbar"
                    value={currentStep}
                    max={steps.length - 1}
                />
                <div className="stepmeter">
                    {steps.map((step, index) => (
                        <span
                            className={`step-title ${
                                currentStep >= index ? "step-active" : ""
                            }`}
                            key={index.toString()}
                        >
                           {step.name}
                        </span>
                    ))}
                </div>
            </div>
        );
    }
}

export default StepMeter;
