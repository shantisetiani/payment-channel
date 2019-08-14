import { MENU } from '../config/menu';
import Profile from '../modules/profile';
import { Authenticate } from '../middlewares/authenticate.middleware';

export const PROFILE_ROUTES = [
	{
		path: MENU.PROFILE,
		component: Profile,
		middleware: [Authenticate],
	},
];
