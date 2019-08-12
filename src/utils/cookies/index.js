import Cookies from 'universal-cookie';
import { CONFIG_COOKIES } from '../../config/cookies';

export const cookies = new Cookies();

export const getCookies = (name) => cookies.get(name);

export const setCookies = (name, value) => {
	cookies.set(name, value);
};

export const clearCookies = async () => {
	await cookies.remove(CONFIG_COOKIES.TOKEN);
	await cookies.remove(CONFIG_COOKIES.ROLE);
	await cookies.remove(CONFIG_COOKIES.FULLNAME);
	await cookies.remove(CONFIG_COOKIES.PERMISSION);
	await cookies.remove(CONFIG_COOKIES.SURVEY);
};
