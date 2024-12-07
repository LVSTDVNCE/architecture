import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { router } from './router/Router';
import routes from './router/Router';

const root = document.getElementById('root');

if (!root) {
	throw new Error('error');
}

console.log(routes);

const container = createRoot(root);
container.render(<RouterProvider router={router} />);
