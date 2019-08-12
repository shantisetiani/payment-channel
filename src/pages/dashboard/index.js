/* eslint-disable react/no-unescaped-entities */

import React, { Component } from 'react';
import Main from '../../layouts/main';

class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: 0,
		};
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({ ...this.state, height: window.innerHeight - 64 });
	};

	render() {
		return (
			<Main title="Dashboard" noPadding>
				<div
					id="dashboard-container"
					style={{ height: this.state.height }}>
					<div className="dashboard-container-mask">
						<div className="dashboard-text-container">
							<div>Welcome to</div>
							<h1>Skeleton Dashboard!</h1>
							<div>
								"Who you are tomorrow begins with what you do
								today."
							</div>
							<div className="dashboard-text-quote-source">
								- Tim Fargo
							</div>
						</div>
					</div>
				</div>
			</Main>
		);
	}
}

export default Dashboard;
