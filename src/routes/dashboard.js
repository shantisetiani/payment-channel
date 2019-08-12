import { MENU } from '../config/menu';
import Dashboard from '../pages/dashboard';
import { Authenticate } from '../middlewares/authenticate.middleware';

export const DASHBOARD_ROUTES = [
	{
		path: MENU.DASHBOARD,
		component: Dashboard,
		middleware: [Authenticate],
	},
];
