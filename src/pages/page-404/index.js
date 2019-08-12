import React from 'react';
import { Link } from 'react-router-dom';
import { MENU } from '../../config/menu';

const Page404 = () => (
	<div className="page-404">
		<div className="page-404-inner">
			<h1>Page not found :(</h1>
			<h2>{"Oops! The page you were looking for doesn't exist"}</h2>
			<Link
				to={MENU.LOGIN}
				className="ant-btn ant-btn-primary full-width">
				Back to homepage
			</Link>
		</div>
	</div>
);

export default Page404;
