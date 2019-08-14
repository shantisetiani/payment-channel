import React, { Component } from 'react';
import Main from '../shared/layouts/main';
import { Layout, Breadcrumb, Menu, Form, Input, Button, Icon } from 'antd';
import ReactHtmlParser from 'react-html-parser';
import ProfileMenu from './menu';
import UpdateProfile from './update-profile';
import ChangePassword from './change-password';
import UserManagement from './user-management';

const { Header, Footer, Sider, Content } = Layout;

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuList: [],
			menu: 'UpdateProfile',
			component: <UpdateProfile />,
		};
	}

	componentDidMount() {
		const menuList = require('./menu.json');

		this.setState({
			menuList: menuList,
		});
	}

	changeMenu = async (e) => {
		var menu = e.item.props.children;
		var component = menu.replace(/ /g, '');

		this.setState({
			menu: component,
		});

		if (component == 'Profile') {
			this.setState({
				component: <UpdateProfile />,
			});
		} else if (component == 'ChangePassword') {
			this.setState({
				component: <ChangePassword />,
			});
		} else if (component == 'UserManagement') {
			this.setState({
				component: <UserManagement />,
			});
		}
	};

	list(data) {
		return data.map((node, index) => {
			return (
				<Menu.Item
					key={index}
					onClick={this.changeMenu}
					className={
						this.state.menu == node.title ||
						this.state.menu == node.component
							? 'active'
							: ''
					}>
					{node.title}
				</Menu.Item>
			);
		});
	}

	render() {
		return (
			<Main title="Profile" noPadding>
				<div id="profile-container">
					<Breadcrumb>
						<Icon type="left" />
						<Breadcrumb.Item>Profile</Breadcrumb.Item>
						<Breadcrumb.Item>Update profile</Breadcrumb.Item>
					</Breadcrumb>
					<Layout>
						<Sider theme="light">
							{/* <ProfileMenu /> */}
							<div className="sider__account">
								Account Name
								<Icon type="edit" />
							</div>
							<Menu>{this.list(this.state.menuList)}</Menu>
						</Sider>
						<Content className="content">
							{this.state.component}
						</Content>
					</Layout>
				</div>
			</Main>
		);
	}
}

export default Profile;
