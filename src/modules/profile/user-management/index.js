import React, { Component } from 'react';
import { Form, Input, Button, Icon, Table, Modal } from 'antd';

class UserManagement extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			loading: false,
			visible: false,
			confirmLoading: false,
		};
	}

	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleOk = () => {
		this.setState({
			confirmLoading: true,
		});
		setTimeout(() => {
			this.setState({
				visible: false,
				confirmLoading: false,
			});
		}, 2000);
	};

	handleCancel = () => {
		console.log('Clicked cancel button');
		this.setState({
			visible: false,
		});
	};

	render() {
		const { username, email, loading } = this.state;

		const columns = [
			{
				title: 'User Name',
				dataIndex: 'username',
				key: 'username',
			},
			{
				title: 'Email',
				dataIndex: 'email',
				key: 'email',
			},
			{
				title: 'Role',
				dataIndex: 'role',
				key: 'role',
			},
			{
				title: '',
				key: 'action',
				render: (text, record) => (
					<span>
						<Icon type="close-circle" />
					</span>
				),
			},
		];

		const data = [
			{
				key: '1',
				username: 'Jacob Matthews',
				email: 'spencer.isadore@meredith.biz',
				role: 'Admin',
			},
			{
				key: '2',
				username: 'Maud Griffith',
				email: 'thompson_lawson@jerry.com',
				role: 'Root',
			},
			{
				key: '3',
				username: 'Josephine Garrett',
				email: 'hettinger_cicero@rosenbaum.net',
				role: 'Product Owner',
			},
		];

		const { visible, confirmLoading, ModalText } = this.state;

		return (
			<div>
				<div className="profile__title">
					User Management
					<Button type="primary" onClick={this.showModal}>
						<Icon type="plus" />
						ADD USER
					</Button>
				</div>
				<Table columns={columns} dataSource={data} />
				<Modal
					title="Add User"
					visible={visible}
					onOk={this.handleOk}
					confirmLoading={confirmLoading}
					onCancel={this.handleCancel}
					footer={[
						<Button
							key="submit"
							type="primary"
							loading={loading}
							onClick={this.handleOk}>
							ADD USER
						</Button>,
					]}>
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
							<label>Email</label>
							<Form.Item>
								<Input
									required
									name="email"
									placeholder="Email"
									defaultValue="email"
									value={email}
									onChange={this.logChange}
								/>
							</Form.Item>
						</div>
					</Form>
				</Modal>
			</div>
		);
	}
}

export default UserManagement;
