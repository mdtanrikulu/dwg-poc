import React, { Component } from 'react';

class Loading extends Component {
	render() {
		return (
			<div className="App-loading">
				<div className="doughnut-container">
					<div className="doughnut-wrapper">
						<h4 className="doughnut-loading-text">Waitingggg...</h4>
						<svg
							className="doughnut-svg"
							version="1.1"
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 399.8 405">
							<path
								className="cake"
								fill="#C49C6C"
								d="M357,96.8c-31.4-50.2-121.7-101-197.9-76.5c-106.4,24.6-143,92.9-143,200.6c0,174.7,275.5,209.9,338.2,84.6
              C386.1,241.9,399,163.9,357,96.8z M217.3,258c-27.1,5.7-35-4-54-11.2c-19-7.3-41.1-53-24.3-73.7c15-18.4,37.4-49.9,70.6-34.6l0,0
              c21.4,6.5,57.1,18.1,57.1,47.2C266.7,227.6,257.1,249.7,217.3,258z"
							/>

							<path
								className="frosting"
								fill="#664D87"
								d="M332.2,75.7C278.9,42,245.2,1.1,178.5,24.9c-30.1,13.9-40.1,11.2-71.5,11.2c-43.8,0-8.3,26.2-26.5,44.5
              c-52.7,52.7-41.4,28.8-41.4,113.3c0,19.4-30.9,116.9,23.8,116.9c53,0,64.6,44.5,108.8,44.5c33.5,0,51.5-18.5,81.8-22
              c28.4-3.3,28.6,17.3,46.7,24.3c16.9,6.5,5.5-28,16.6-39.1c29-29,50.3-30.6,50.3-83.6C367.3,168.4,388.9,111.4,332.2,75.7z
              M244.6,254.6c-5.8,7.1-50,9.1-63.4,12.6c-23.2,6.1-60.2-45.5-60.2-67.9c0-40.6,25.3-56.5,55.8-64.6c11.2-3,28.3-3.7,42.6-5.8
              c8.6-1.2,15.6-6.4,21.4-3.1c5.8,3.3,6.2,12.7,7.5,22.3c1.1,8.7,21.3,25.4,26.1,35.1C286.2,207,254.3,242.6,244.6,254.6z"
							/>
							<g className="sprinkles" fill="#ffc1e7">
								<circle
									className="sprinkle"
									cx="260.9"
									cy="59.8"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="181"
									cy="70.2"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="160.2"
									cy="101.9"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="71"
									cy="134.1"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="104.2"
									cy="153.8"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="60.1"
									cy="213"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="112.5"
									cy="259.7"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="72"
									cy="281"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="136.9"
									cy="307.4"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="243.8"
									cy="294.4"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="291"
									cy="312.1"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="293.6"
									cy="265.4"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="352.8"
									cy="215"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="309.7"
									cy="186"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="321.1"
									cy="228"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="347.6"
									cy="131"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="277"
									cy="127.9"
									r="8.7"
								/>
								<circle
									className="sprinkle"
									cx="297.3"
									cy="87.9"
									r="8.7"
								/>
							</g>
						</svg>
					</div>
					<div className="doughnut-shadow" />
				</div>
			</div>
		);
	}
}

export default Loading;
