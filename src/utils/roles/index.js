import { CONFIG_LOCALSTORAGE } from '../../config/cookies';

const getRoleFromCookies = () => {
	const permissions = localStorage.getItem(CONFIG_LOCALSTORAGE.PERMISSION);
	return JSON.parse(permissions) || [];
};

export const hasAccess = (roleItem) => {
	const permissions = getRoleFromCookies();
	return permissions.includes(roleItem);
};
