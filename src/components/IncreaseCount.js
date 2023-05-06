import { React } from 'react';

const IncreaseCount = (context) => {
	const { actions } = context;

	return <div>
		<button onClick={ () =>
			actions.setIncreaseCount() }
		>
			IncreaseCount
		</button>
	</div>;
};

export default IncreaseCount;
