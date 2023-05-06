import { React } from 'react';

const DecreaseCount = (context) => {
	const { actions } = context;

	return <div>
		<button onClick={ () =>
			actions.setDecreaseCount() }
		>
			DecreaseCount
		</button>
	</div>;
};

export default DecreaseCount;
