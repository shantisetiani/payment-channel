import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';

class AccountMenu extends Component {
	render() {
		const menu = (
			<Menu>
				<Menu.Item key="0">
					<a href="http://www.alipay.com/">1st menu item</a>
				</Menu.Item>
				<Menu.Item key="1">
					<a href="http://www.taobao.com/">2nd menu item</a>
				</Menu.Item>
				<Menu.Divider />
				<Menu.Item key="3">3rd menu item</Menu.Item>
			</Menu>
		);

		return (
			<div>
				<Dropdown overlay={menu} trigger={['click']}>
					<a className="ant-dropdown-link">
						Click me <Icon type="down" />
					</a>
				</Dropdown>
			</div>
		);
	}
}

export default AccountMenu;
