import React, { Component } from 'react';
import { Form, Input, Button, Icon } from 'antd';

class ChangePassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			CurrPass: '',
			newPass: '',
			confrimNewPass: '',
			loading: false,
		};
	}

	logChange = async (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { CurrPass, newPass, confrimNewPass, loading } = this.state;

		return (
			<div>
				<div className="profile__title">Change Password</div>
				<Form>
					<div className="form-input-section">
						<label>Current Password</label>
						<Form.Item>
							<Input
								required
								name="CurrPass"
								placeholder="Current Password"
								defaultValue="CurrPass"
								value={CurrPass}
								onChange={this.logChange}
							/>
						</Form.Item>
						<label>New Password</label>
						<Form.Item>
							<Input
								required
								name="newPass"
								placeholder="New Password"
								defaultValue="newPass"
								value={newPass}
								onChange={this.logChange}
							/>
						</Form.Item>
						<label>Confirm New Password</label>
						<Form.Item>
							<Input
								required
								name="confrimNewPass"
								placeholder="Confirm New Password"
								defaultValue="confrimNewPass"
								value={confrimNewPass}
								onChange={this.logChange}
							/>
							<div className="input-caption">
								8 character minimum
							</div>
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

export default ChangePassword;
