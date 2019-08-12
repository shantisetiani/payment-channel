/* eslint-disable */

import { BaseApi } from './base';

export class AuthApi extends BaseApi {
	constructor() {
		super('private/administration');
	}

	login = (data) => {
		return this.make('POST', 'auth/login', data);
	};

	logout = () => {
		return this.make('POST', 'auth/logout');
	};
}
