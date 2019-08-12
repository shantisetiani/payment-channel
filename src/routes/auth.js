import { MENU } from '../config/menu';
import Login from '../pages/users/login';

export const AUTH_ROUTES = [
	{ path: MENU.HOMEPAGE, component: Login },
	{ path: MENU.LOGIN, component: Login },
];
