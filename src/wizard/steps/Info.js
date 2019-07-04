import React, { Component } from "react";

class Info extends Component {
	render() {
		const { handleInput, formObject } = this.props;
		const { title, params } = formObject
		const { baseURL, author, info, description, keywords } = params;
		return (
			<div>
				<h4>Info</h4>
				<div className="inputbox">
					<label htmlFor="baseURL">Enter your ENS Url</label>
					<input
						type="baseURL"
						name="baseURL"
						id="baseURL"
						onChange={handleInput}
						defaultValue={baseURL}
						required
					/>
				</div>
				<div className="inputbox">
					<label htmlFor="author">Author</label>
					<input
						type="text"
						name="author"
						id="author"
						onChange={handleInput}
						defaultValue={author}
						required
					/>
				</div>
				<div className="inputbox">
					<label htmlFor="info">Info/Profession</label>
					<input
						type="text"
						name="info"
						id="info"
						onChange={handleInput}
						defaultValue={info}
						required
					/>
				</div>
				<div className="inputbox">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						name="title"
						id="title"
						onChange={handleInput}
						defaultValue={title}
						required
					/>
				</div>
				<div className="inputbox">
					<label htmlFor="description">Description</label>
					<textarea
						rows="4"
						type="text"
						name="description"
						id="description"
						onChange={handleInput}
						defaultValue={description}
						required
					/>
				</div>
				<div className="inputbox">
					<label htmlFor="keywords">Keywords</label>
					<textarea
						rows="4"
						type="text"
						name="keywords"
						id="keywords"
						onChange={handleInput}
						defaultValue={keywords}
						required
					/>
				</div>
			</div>
		);
	}
}

export default Info;
