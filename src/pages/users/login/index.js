import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import qs from 'qs';
import { message } from 'antd';

import FormLogin from './form';
import Logo from '../../../assets/logo-payment-channel@2x.png';
import { clearCookies, getCookies } from '../../../utils/cookies';
import { CONFIG_COOKIES } from '../../../config/cookies';
import { MENU } from '../../../config/menu';
import { APP_VERSION } from '../../../config/version';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		const { location } = this.props;
		const parsedQuery = qs.parse(location.search.replace('?', ''));
		let stayInLoginPage = false;
		if (parsedQuery.isLogout) {
			clearCookies();
			stayInLoginPage = true;
		} else if (parsedQuery.isExpired) {
			message.error('Session may be expired. Please login again');
			clearCookies();
			stayInLoginPage = true;
		}
		if (stayInLoginPage) return;
		const token = getCookies(CONFIG_COOKIES.TOKEN);
		if (token) {
			this.props.history.push(MENU.DASHBOARD);
		}
	}

	render() {
		return (
			<div className="login">
				<div className="login-inner">
					<img src={Logo} alt="payfazz-logo" />
					<h1 className="login-title">LOGIN</h1>
					<p>Welcome back, please login to your account</p>
					<FormLogin />
				</div>
				<div className="app-version">{APP_VERSION}</div>
			</div>
		);
	}
}

Login.propTypes = {
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
};

export default withRouter(Login);
