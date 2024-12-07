import { Link, Outlet } from 'react-router-dom';
import { sum } from '@packages/shared';

export const App = () => {
	return (
		<div>
			<h1>BEST SHOP</h1>
			<div>{sum(2, 4)}</div>
			<Link style={{ marginRight: '20px' }} to='/admin'>
				admin
			</Link>
			<Link style={{ marginRight: '20px' }} to='/shop'>
				shop
			</Link>
			<Link to='/cart'>cart</Link>
			<Outlet />
		</div>
	);
};
