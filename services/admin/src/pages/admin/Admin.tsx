import { sum } from '@packages/shared';

export const Admin = () => {
	return (
		<div>
			<h1>ADMIN PAGE</h1>
			<div>{sum(2, 4)}</div>
		</div>
	);
};
