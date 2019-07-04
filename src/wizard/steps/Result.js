import React, { Component } from 'react';

class Result extends Component {
    render() {
        const { error } = this.props;
        return (
            <div>
                <h4
                    className={`App-result-title ${
                        error ? 'error' : 'successful'
                    }`}>
                    {error ? 'Error!' : 'Successful!'}
                </h4>

                <div className="App-result">
                    {!error ? (
                        <span>
                            {' '}
                            You can now reach development server on{' '}
                            <b>
                                <a
                                    href="http://localhost:1313"
                                    target="ensDemo">
                                    http://localhost:1313
                                </a>
                            </b>
                        </span>
                    ) : (
                        <pre>{error.message}</pre>
                    )}
                </div>
            </div>
        );
    }
}

export default Result;
