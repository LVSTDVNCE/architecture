import { App } from '@/components/App';
import { Cart } from '@/pages/cart/Cart';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/cart',
				element: <Cart />,
			},
		],
	},
];

export const router = createBrowserRouter(routes);
export default routes;
