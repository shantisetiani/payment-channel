import React from 'react';
import { Layout, Icon } from 'antd';
import PropTypes from 'prop-types';

import Logo from '../../../../assets/logo.png';

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
				Account Name
				<Icon type="caret-down" />
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
