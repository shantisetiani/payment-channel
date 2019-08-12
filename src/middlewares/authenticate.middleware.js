import React from 'react';
import { Redirect } from 'react-router-dom';
import { CONFIG_COOKIES } from '../config/cookies';
import { MENU } from '../config/menu';
import { getCookies } from '../utils/cookies';

export class Authenticate {
	handle() {
		if (!getCookies(CONFIG_COOKIES.TOKEN)) {
			return (
				<Redirect
					to={{
						pathname: MENU.LOGIN,
					}}
				/>
			);
		}
	}
}
