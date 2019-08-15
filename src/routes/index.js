import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Page404 from '../modules/page-404';
import { AUTH_ROUTES } from './auth';
import { DASHBOARD_ROUTES } from './dashboard';
import { PROFILE_ROUTES } from './profile';
import { TRANSACTION_ROUTES } from './transaction';
import { routeFactory } from '../utils/routes/route.factory';
import { PUBLIC_URL } from '../config/url';

const ROUTES = [
	...AUTH_ROUTES,
	...DASHBOARD_ROUTES,
	...PROFILE_ROUTES,
	...TRANSACTION_ROUTES,
	{ component: Page404 },
];

export const ApplicationRouting = (
	<Router basename={PUBLIC_URL}>
		<Switch>{routeFactory(ROUTES)}</Switch>
	</Router>
);
