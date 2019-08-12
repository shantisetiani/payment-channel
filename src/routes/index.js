import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Page404 from '../pages/page-404';
import { AUTH_ROUTES } from './auth';
import { DASHBOARD_ROUTES } from './dashboard';
import { routeFactory } from '../utils/routes/route.factory';

const ROUTES = [...AUTH_ROUTES, ...DASHBOARD_ROUTES, { component: Page404 }];

export const ApplicationRouting = (
	<Router>
		<Switch>{routeFactory(ROUTES)}</Switch>
	</Router>
);
