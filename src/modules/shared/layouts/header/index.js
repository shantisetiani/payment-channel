import React from 'react';
import { Layout, Icon, Menu, Dropdown } from 'antd';
import PropTypes from 'prop-types';
import Navbot from '../../../../assets/icon/ic-common-navbot-account-dynamic@2x.png';
import Logout from '../../../../assets/icon/ic-user-logout-dynamic@2x.png';

import Logo from '../../../../assets/logo.png';

const menu = (
	<Menu className="account-dropdown-menu">
		<div className="account-info">
			<img src={Navbot} alt="account-img" className="account-img" />
			<div className="account-name">Account Name</div>
			<div className="account-label">Admin</div>
		</div>
		<Menu.Divider />
		<div className="account-email">
			<div className="account-label">Main Email Address</div>
			<div>albert@payfazz.com</div>
		</div>
		<Menu.Divider />
		<div className="account-menu-link">
			<Menu.Item key="1">
				<img src={Navbot} className="account-icon" />
				My Profile
			</Menu.Item>
			<Menu.Item key="2">
				<img src={Logout} className="account-icon" />
				Logout
			</Menu.Item>
		</div>
	</Menu>
);
const { Header } = Layout;
const AppHeader = ({ toggle, title, backToHome }) => (
	<Header style={{ background: '#fff', padding: 0 }}>
		<div className="app-header">
			<div className="app-header__logo">
				<div className="toggle-menu" onClick={toggle}>
					<span />
				</div>
				<div className="app-header__logo-svg" onClick={backToHome}>
					<img src={Logo} alt="" />
				</div>
			</div>
			<div className="app-header__title">{title}</div>
			<div className="app-header__account">
				{/* Account Name
				<Icon type="caret-down" /> */}
				<Dropdown overlay={menu} trigger={['click']}>
					<a className="ant-dropdown-link">
						<img
							src={Navbot}
							alt="account-img"
							className="app-header__account-img"
						/>
						Account Name <Icon type="down" />
					</a>
				</Dropdown>
			</div>
		</div>
	</Header>
);

AppHeader.defaultProps = {
	title: '',
};

AppHeader.propTypes = {
	toggle: PropTypes.func.isRequired,
	title: PropTypes.string,
	backToHome: PropTypes.func.isRequired,
};

export default AppHeader;
