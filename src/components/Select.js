import { React } from 'react';
import { map, values } from '@laufire/utils/collection';

const Select = (context) => {
	const {
		actions, config: { countries },
		state: { selectedCountry },
	} = context;

	const option = (country, key) =>
		<option key={ key }>{country.title}</option>;

	return (
		<div>
			<label>Select Your Country </label>
			<select { ...{
				value: selectedCountry,
				onChange: (e) =>
					actions.setSelectedCountry(e.target.value),
			} }
			>{values(map(countries, option))}
			</select>
		</div>
	);
};

export default Select;
