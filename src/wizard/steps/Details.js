import React, { Component } from "react";

class Details extends Component {
	render() {
		const { handleInput, formObject } = this.props;
		const { linkedin, github, twitter, copyright } = formObject.params;
		return (
			<div>
				<h4>Details</h4>
				<div>
					<h6>Social</h6>
					<div className="inputbox">
						<label htmlFor="linkedin">Linkedin</label>
						<input
							type="url"
							name="linkedin"
							id="linkedin"
							onChange={handleInput}
							defaultValue={linkedin}
							required
						/>
					</div>
					<div className="inputbox">
						<label htmlFor="github">Github</label>
						<input
							type="url"
							name="github"
							id="github"
							onChange={handleInput}
							defaultValue={github}
							required
						/>
					</div>
					<div className="inputbox">
						<label htmlFor="twitter">Twitter</label>
						<input
							type="url"
							name="twitter"
							id="twitter"
							onChange={handleInput}
							defaultValue={twitter}
							required
						/>
					</div>
				</div>
				<div>
					<h6>Disclaimer</h6>
					<div className="inputbox">
						<label htmlFor="copyright">Copyright</label>
						<input
							type="text"
							name="copyright"
							id="copyright"
							onChange={handleInput}
							defaultValue={copyright}
							required
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Details;
