import { React } from 'react';

const CheckBox = (context) => {
	const { actions, config: { courses }} = context;

	return (
		courses.map((course, i) =>
			<div key={ i }>
				<input { ...{
					type: 'checkbox',
					value: course,
					onClick: (e) => actions.setSelectedCheckBox(e.target.value),
				} }
				/><label>{course}</label></div>)
	);
};

export default CheckBox;
