import { clearCookies } from '../utils/cookies';
import { MENU } from '../config/menu';
import { notification } from 'antd';

export const errorInterceptor = (err) => {
	const { response } = err;
	if (response) {
		if (response.status === 401) {
			notification.error({
				message: 'Error',
				description: 'Token expired, please login again',
			});
			window.setTimeout(() => {
				clearCookies();
				window.location.href = MENU.LOGIN;
			}, 1500);
		} else if (response.status === 403) {
			notification.error({
				message: 'Error',
				description: 'Unauthorized Action!',
			});
		} else if (response.status === 500) {
			notification.error({
				message: 'Error',
				description: 'Something went wrong!',
			});
		} else {
			notification.error({
				message: response.data ? response.data.code : 'Error',
				description: response.data ? response.data.message : '',
			});
		}
	}
	return Promise.reject(err);
};
