import { React } from 'react';
import './App.scss';
import IncreaseCount from './components/IncreaseCount';
import DecreaseCount from './components/DecreaseCount';
import Input from './components/Input';
import Select from './components/Select';
import SelectColor from './components/SelectColor';
import CheckBox from './components/CheckBox';

const App = (context) => {
	const { state } = context;

	return <div className="App">
		<div>{state.count}</div>
		<IncreaseCount { ...context }/>
		<DecreaseCount { ...context }/><br/>
		<Input { ...context }/><br/>
		<div>Your Name is :{state.firstName}</div><br/>
		<Select { ...context }/>
		<div>Selected Country: {state.selectedCountry}</div><br/>
		<SelectColor { ...context }/>
		<div>Selected Color is :{state.selectedColor}</div>
		<div style={ { color: state.selectedColor } }>Changing Text Color
		</div><br/>
		<CheckBox { ...context }/>
	</div>;
};

export default App;
