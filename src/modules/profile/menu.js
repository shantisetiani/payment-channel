import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

class ProfileMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: 1,
		};
	}

	changeMenu = async (e) => {
		this.setState({ menu: e.key });
	};

	render() {
		return (
			<div>
				<div className="sider__account">
					Account Name
					<Icon type="edit" />
				</div>
				<Menu>
					<Menu.Item key="1" onClick={this.changeMenu}>
						Profile
					</Menu.Item>
					<Menu.Item key="2" onClick={this.changeMenu}>
						Change Password
					</Menu.Item>
					<Menu.Item key="3" onClick={this.changeMenu}>
						User Management
					</Menu.Item>
					<Menu.Item key="4" onClick={this.changeMenu}>
						Log Out
					</Menu.Item>
				</Menu>
			</div>
		);
	}
}

export default ProfileMenu;
