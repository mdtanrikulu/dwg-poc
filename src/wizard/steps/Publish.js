import React, { Component } from 'react';

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function isIterable(obj) {
  // checks for null and undefined, exclude string
  if (obj == null) {
    return false;
  }
  return typeof obj === 'object';
}

class Publish extends Component {

    printEmAll(data) {
        return Object.keys(data).map((key, index) => {
            if(isIterable(data[key])) {
                return this.printEmAll(data[key]);
            }
            return <div className="inputbox" key={index.toString()}>
                <label>{key.capitalize()}</label>
                <span>{data[key]}</span>
            </div>
        })
    }

    render() {
    	const { formObject } = this.props
        return (
            <div>
            	<h4>Publish</h4>
            	<div className="App-publish-summary">
            		{
                        this.printEmAll(formObject)
            		}
            	</div>
            </div>
        );
    }
}

export default Publish;
