import { React } from 'react';

const Input = (context) => {
	const { firstName, actions } = context;

	return (
		<div>
			<input
				type="text"
				value={ firstName }
				onChange={ (e) => actions.setFirstName(e.target.value) }
			/>
		</div>

	);
};

export default Input;
