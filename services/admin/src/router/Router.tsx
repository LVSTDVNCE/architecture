import { App } from '@/components/App';
import { Admin } from '@/pages/admin/Admin';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/admin',
				element: <Admin />,
			},
		],
	},
];

export const router = createBrowserRouter(routes);
export default routes;
