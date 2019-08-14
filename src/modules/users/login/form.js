import React, { Component } from 'react';
import { Form, Input, Button, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { setCookies } from '../../../utils/cookies';
import { CONFIG_COOKIES } from '../../../config/cookies';
import { MENU } from '../../../config/menu';

class FormSignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clientId: '',
			username: '',
			password: '',
			viewPassword: false,
			loading: false,
		};
	}

	logChange = async (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	viewPassword = () =>
		this.setState({ viewPassword: !this.state.viewPassword });

	submitSignin = () => {
		this.setState({ ...this.state, loading: true });
		setCookies(CONFIG_COOKIES.FULLNAME, 'dummy');
		setCookies(CONFIG_COOKIES.TOKEN, 'dummy');
		this.setState({ ...this.state, loading: false });
		this.props.history.push(MENU.PROFILE);
	};

	render() {
		const {
			clientId,
			username,
			password,
			viewPassword,
			loading,
		} = this.state;
		const passwordType = viewPassword ? 'text' : 'password';

		return (
			<Form onSubmit={this.submitSignin}>
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
				<Form.Item>
					<Input
						required
						name="username"
						placeholder="Email"
						defaultValue="username"
						value={username}
						onChange={this.logChange}
					/>
				</Form.Item>
				<Form.Item>
					<Input
						required
						name="password"
						type={passwordType}
						placeholder="Password"
						defaultValue="password"
						value={password}
						onChange={this.logChange}
						addonAfter={
							<Icon
								type="eye"
								theme="outlined"
								onClick={this.viewPassword}
							/>
						}
					/>
				</Form.Item>
				<Form.Item>
					<Button htmlType="submit" type="primary" loading={loading}>
						LOGIN
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

FormSignIn.propTypes = {
	history: PropTypes.object.isRequired,
};

export default withRouter(FormSignIn);
