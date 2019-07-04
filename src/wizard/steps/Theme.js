import React, { Component } from "react";

class Theme extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themes: [
                {
                    preview:
                        "https://github.com/luizdepra/hugo-coder/raw/master/images/screenshot.png",
                    name: "hugo-coder"
                },
                {
                    preview:
                        "https://camo.githubusercontent.com/521bafbc86a6bb1dbd62debe6960138f9be9f368/68747470733a2f2f6473682e72652f643237383232",
                    name: "hello-friend-ng"
                }
            ]
        };
    }

    render() {
        const { themes } = this.state;
        const { handleInput, formObject } = this.props;
        return (
            <div>
                <h4>Theme</h4>
                <div className="App-theme-grid">
                    {themes.map((item, index) => (
                        <div
                            id={`theme-${index}`}
                            data-name={item.name}
                            className={`theme-grid-item ${
                                formObject.theme === item.name ? "selected" : ""
                            }`}
                            key={index.toString()}
                            onClick={handleInput}
                            tabIndex="0"
                        >
                            <img src={item.preview} alt={item.name} />
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Theme;
