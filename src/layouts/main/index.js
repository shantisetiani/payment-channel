import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppHeader from '../header';
import Sidebar from '../sidebar';
import { MENU } from '../../config/menu';
import { hasAccess } from '../../utils/roles';
import { clearCookies } from '../../utils/cookies';

const { Content } = Layout;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
		};
	}

	toggle = () => {
		const { collapsed } = this.state;
		this.setState({
			collapsed: !collapsed,
		});
	};

	backToHome = () => {
		this.props.history.push(MENU.DASHBOARD);
	};

	logout = async () => {
		clearCookies();
		this.props.history.replace(`${MENU.LOGIN}?isLogout=true`);
	};

	render() {
		const { collapsed } = this.state;
		const { children, title, roleItem } = this.props;
		return (
			<Layout>
				<Sidebar
					collapsed={collapsed}
					toggle={this.toggle}
					logout={this.logout}
				/>
				<Layout style={{ transition: 'all .2s' }}>
					<AppHeader
						toggle={this.toggle}
						title={title}
						backToHome={this.backToHome}
					/>
					<Content className="main-content">
						{roleItem && !hasAccess(roleItem) ? (
							<Row type="flex" justify="center">
								<Col>
									<h1 style={{ marginTop: '1em' }}>
										Tidak dapat mengakses halaman ini
									</h1>
								</Col>
							</Row>
						) : (
							<div>{children}</div>
						)}
					</Content>
				</Layout>
			</Layout>
		);
	}
}

App.defaultProps = {
	title: '',
	roleItem: '',
};

App.propTypes = {
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.element])
		.isRequired,
	title: PropTypes.string,
	history: PropTypes.object.isRequired,
	roleItem: PropTypes.string,
};

export default withRouter(App);
