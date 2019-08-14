import { MENU } from '../config/menu';
import UpdateProfile from '../modules/profile/update-profile';

export const UPDATEPROFILE_ROUTES = [
	{
		path: MENU.UPDATEPROFILE,
		component: UpdateProfile,
	},
];
