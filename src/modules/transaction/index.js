import React, { Component } from 'react';
import Main from '../shared/layouts/main';
import {
	Layout,
	Form,
	Input,
	Select,
	Button,
	Icon,
	DatePicker,
	Modal,
	Table,
} from 'antd';
import ReactHtmlParser from 'react-html-parser';

const { Header, Footer, Sider, Content } = Layout;

class Transaction extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			loading: false,
			visible: false,
		};
	}

	componentDidMount() {}

	handleChange = (value) => {
		console.log(`selected ${value}`);
	};

	showModal = () => {
		this.setState({
			visible: true,
		});
	};

	handleOk = () => {
		this.setState({ loading: true });
		setTimeout(() => {
			this.setState({ loading: false, visible: false });
		}, 3000);
	};

	handleCancel = () => {
		this.setState({ visible: false });
	};

	manageTable = (pagination, sorter) => {
		console.log('params', pagination, sorter);
	};

	render() {
		const { Option } = Select;
		const { RangePicker } = DatePicker;

		const columns = [
			{
				title: 'Order Id',
				dataIndex: 'orderId',
				sorter: (a, b) => a.orderId - b.orderId,
			},
			{
				title: 'Reference ID',
				dataIndex: 'referenceId',
				defaultSortOrder: 'descend',
				sorter: (a, b) => a.referenceId - b.referenceId,
			},
			{
				title: 'Product Name',
				dataIndex: 'productName',
				sorter: (a, b) => a.productName.value - b.productName.value,
			},
			{
				title: 'Customer Number',
				dataIndex: 'customerNumber',
			},
			{
				title: 'Amount',
				dataIndex: 'amount',
			},
			{
				title: 'Status',
				dataIndex: 'status',
				render: (text, record) => (
					<label className="label-status label-status--pending">
						{text}
					</label>
				),
			},
			{
				title: 'Action',
				dataIndex: 'action',
				render: (text, record) => <Button>{text}</Button>,
			},
		];
		const data = [];
		for (let i = 0; i < 20; i++) {
			data.push({
				key: i,
				orderId: `9606568${i}`,
				referenceId: 44819,
				productName: 'Telkomsel 5000K',
				customerNumber: '219-062-6459',
				amount: 'Rp. 10.175',
				status: 'Pending',
				action: 'Copy',
			});
		}

		return (
			<Main title="Transaction" noPadding>
				<div id="transaction-container">
					<Input
						placeholder="#OrderId, !RefferenceID, $Destination Number"
						suffix={
							<Icon
								type="search"
								style={{ color: 'rgba(0,0,0,.45)' }}
							/>
						}
					/>
					<div className="filter-section">
						<div className="filter__status">
							<label>Status</label>
							<Select
								defaultValue="pending"
								onChange={this.handleChange}>
								<Option value="pending">Pending</Option>
								<Option value="success">Success</Option>
								<Option value="failed">Failed</Option>
							</Select>
						</div>
						<div className="filter__date">
							<label>Date</label>
							<RangePicker
								placeholder={['dd/mm/yy', 'dd/mm/yy']}
							/>
						</div>
						<div>
							<Button type="primary" onClick={this.showModal}>
								EXPORT DATA
							</Button>
						</div>
						<Modal
							className="export-data-modal"
							visible={this.state.visible}
							title="Export Data Confirmation"
							onOk={this.handleOk}
							onCancel={this.handleCancel}
							footer={[
								<Button
									key="back"
									className="btn-cancel"
									onClick={this.handleCancel}>
									Cancel
								</Button>,
								<Button
									key="submit"
									className="btn-confrim"
									type="primary"
									loading={this.state.loading}
									onClick={this.handleOk}>
									CONFIRM
								</Button>,
							]}>
							<p>This data would be downloaded to your device</p>
						</Modal>
					</div>
					<Table
						columns={columns}
						dataSource={data}
						onChange={this.manageTable}
					/>
				</div>
			</Main>
		);
	}
}

export default Transaction;
