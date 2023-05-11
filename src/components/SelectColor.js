import { React } from 'react';

const SelectColor = (context) => {
	const {
		actions, config: { colors },
		state: { selectedColor },
	} = context;

	const option = (color, i) =>
		<option key={ i }>{color}</option>;

	return (
		<div>
			<select { ...{
				value: selectedColor,
				onChange: (e) =>
					actions.setSelectedColor(e.target.value),
			} }
			>{colors.map(option)}
			</select>
		</div>
	);
};

export default SelectColor;
