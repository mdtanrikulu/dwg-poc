import React, { Component } from 'react';

class ControlPanel extends Component {

    render() {
    	const { currentStep, steps, handlePrev, handleNext, handlePublish } = this.props;
        return (
            <div>
            	<button 
            		onClick={handlePrev}
            		disabled={!currentStep}>
            		Prev
            	</button>
            	{ !(currentStep >= (steps.length - 1)) &&
                    <button 
                        onClick={currentStep >= (steps.length - 2) ? handlePublish : handleNext}>
                        {currentStep >= (steps.length - 2) ? 'Publish' : 'Next'}
                    </button>
                }
            </div>
        );
    }
}

export default ControlPanel;
