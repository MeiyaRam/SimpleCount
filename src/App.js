import { React } from 'react';
import './App.scss';
import IncreaseCount from './components/IncreaseCount';
import DecreaseCount from './components/DecreaseCount';
import Input from './components/Input';
import Select from './components/Select';

const App = (context) => {
	const { state } = context;

	return <div className="App">
		<div>{state.count}</div>
		<IncreaseCount { ...context }/>
		<DecreaseCount { ...context }/><br/>
		<Input { ...context }/><br/>
		<div>Your Name is :{state.firstName}</div><br/>
		<Select { ...context }/>
		<div>Selected Country: {state.selectedCountry}</div>
	</div>;
};

export default App;
