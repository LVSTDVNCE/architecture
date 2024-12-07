import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { router } from './router/Router';

const root = document.getElementById('root');

const container = createRoot(root);
container.render(<RouterProvider router={router} />);
