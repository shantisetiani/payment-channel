import { MENU } from '../config/menu';
import Transaction from '../modules/transaction';
import { Authenticate } from '../middlewares/authenticate.middleware';

export const TRANSACTION_ROUTES = [
	{
		path: MENU.TRANSACTION,
		component: Transaction,
		middleware: [Authenticate],
	},
];
