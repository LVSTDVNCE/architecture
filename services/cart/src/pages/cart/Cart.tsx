import { sum } from '@packages/shared';

export const Cart = () => {
	return (
		<div>
			<h1>CART PAGE</h1>
			<div>{sum(2, 4)}</div>
		</div>
	);
};
