import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';
import StepMeter from './StepMeter';
import StepFrame from './StepFrame';
import ControlPanel from './ControlPanel';
import wizard from './steps';

const { Info, Theme, Details, Publish, Result } = wizard;

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0,
            error: false,
            steps: [
                {
                    name: 'Info',
                    component: Info
                },
                {
                    name: 'Theme',
                    component: Theme
                },
                {
                    name: 'Details',
                    component: Details
                },
                {
                    name: 'Publish',
                    component: Publish
                },
                {
                    name: 'Result',
                    component: Result
                }
            ],
            formObject: { 
                params: {
                    avatarurl: "images/avatar.jpg"
                }, 
                languageCode: "en-us",
            },
            loadingScreen: false
        };
    }

    _handleInput = e => {
        const target = e.currentTarget;
        const obj = {};
        if (target.id.includes('theme')) {
            obj.id = 'theme';
            obj.value = target.getAttribute('data-name');
        } else if (target.id === 'title') {
            obj.id = target.id;
            obj.value = target.value;
        } else {
            obj.value = {
                ...this.state.formObject.params,
                [target.id]: target.value
            };
            obj.id = 'params';
        }
        this.setState(prevState => ({
            formObject: {
                ...prevState.formObject,
                [obj.id]: obj.value
            }
        }));
    };

    _handlePrev = e => {
        this.setState(prevState => ({
            currentStep: prevState.currentStep - 1
        }));
    };

    _handleNext = e => {
        this.setState(prevState => ({
            currentStep: prevState.currentStep + 1
        }));
    };

    _handlePublish = e => {
        this.setState(
            {
                loadingScreen: true
            },
            () => this._handleNext()
        );
        axios
            .post('http://localhost:3232/generate', {
                formData: this.state.formObject
            })
            .then(response => {
                console.log(response);
                this.setState({
                    loadingScreen: false,
                    error: false
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({
                    loadingScreen: false,
                    error: error
                });
            });
    };

    render() {
        const { loadingScreen } = this.state;
        return (
            <div>
                {loadingScreen ? (
                    <Loading />
                ) : (
                    <div>
                        <StepMeter {...this.state} />
                        <StepFrame
                            {...this.state}
                            handleInput={this._handleInput}
                        />
                        <ControlPanel
                            {...this.state}
                            handlePrev={this._handlePrev}
                            handleNext={this._handleNext}
                            handlePublish={this._handlePublish}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default Wizard;
