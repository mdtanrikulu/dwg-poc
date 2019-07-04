import React, { Component } from "react";

class StepFrame extends Component {
    
    render() {
        const { steps, currentStep } = this.props;
        const StepComponent = steps[currentStep].component;
        return (
            <div className="App-stepframe">
                <StepComponent {...this.props}/>
            </div>
        );
    }
}

export default StepFrame;
