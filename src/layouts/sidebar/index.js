import React from 'react';
import { Avatar, Menu, Drawer, Icon } from 'antd';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Logo from '../../assets/logo-payment-channel@2x.png';
import { PUBLIC_URL } from '../../config/url';

const { SubMenu } = Menu;
const Sidebar = ({ collapsed, toggle, location, logout }) => {
	const locs = location.pathname
		? location.pathname.replace(PUBLIC_URL, '').split('/')
		: [];
	const getActiveNavLink = () => (locs.length > 1 ? locs[1] : '');
	return (
		<Drawer
			className="sidebar__drawer"
			title=" "
			placement="left"
			onClose={toggle}
			visible={collapsed}>
			<div>
				<img src={Logo} className="sidebar_logo" alt="payfazz-logo" />
				<Menu
					mode="inline"
					defaultSelectedKeys={['/']}
					selectedKeys={[getActiveNavLink()]}
					onClick={toggle}>
					<SubMenu
						key="sub1"
						title={
							<span>
								<span>Client</span>
							</span>
						}>
						<Menu.Item key="1">List Client</Menu.Item>
						<Menu.Item key="2">Transaction</Menu.Item>
						<Menu.Item key="3">Settlement</Menu.Item>
					</SubMenu>
					<Menu.Item key="4">Monitoring</Menu.Item>
					<Menu.Item key="5" onClick={logout}>
						Logout
					</Menu.Item>
				</Menu>
			</div>
		</Drawer>
	);
};

Sidebar.defaultProps = {
	toggle: () => {},
	collapsed: false,
};

Sidebar.propTypes = {
	toggle: PropTypes.func,
	collapsed: PropTypes.bool,
	location: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired,
};

export default withRouter(Sidebar);
