import { React } from 'react';

const CheckBox = (context) => {
	const {
		actions, state: { checkedCourse },
	} = context;

	return (
		<div>
			<input { ...{
				type: 'checkbox',
				value: checkedCourse,
				onClick: (e) => actions.setSelectedCheckBox(e.target.value),
			} }
			/><label>Js React</label>
		</div>

	);
};

export default CheckBox;
