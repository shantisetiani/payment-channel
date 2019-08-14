import React, { Component } from 'react';
import { Form, Input, Button, Icon } from 'antd';

class UpdateProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			clientId: '',
			mainEmail: '',
			financeEmail: '',
			loading: false,
		};
	}

	logChange = async (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const {
			username,
			clientId,
			mainEmail,
			financeEmail,
			loading,
		} = this.state;

		return (
			<div>
				<div className="profile__title">Personal Information</div>
				<Form>
					<div className="form-input-section">
						<label>User Name</label>
						<Form.Item>
							<Input
								required
								name="username"
								placeholder="User Name"
								defaultValue="username"
								value={username}
								onChange={this.logChange}
							/>
						</Form.Item>
						<label>Client Id</label>
						<Form.Item>
							<Input
								required
								name="clientId"
								placeholder="Client ID"
								defaultValue="clientId"
								value={clientId}
								onChange={this.logChange}
							/>
						</Form.Item>
						<label>Main Email Address</label>
						<Form.Item>
							<Input
								required
								name="mainEmail"
								placeholder="Main Email Address"
								defaultValue="mainEmail"
								value={mainEmail}
								onChange={this.logChange}
							/>
						</Form.Item>
						<label>Finance Email Address</label>
						<Form.Item>
							<Input
								required
								name="financeEmail"
								placeholder="Finance Email Address"
								defaultValue="financeEmail"
								value={financeEmail}
								onChange={this.logChange}
							/>
						</Form.Item>
					</div>
					<hr />
					<Form.Item>
						<Button
							htmlType="submit"
							type="primary"
							loading={loading}>
							SUBMIT
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

export default UpdateProfile;
