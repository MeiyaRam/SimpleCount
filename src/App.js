import { React } from 'react';
import './App.scss';
import IncreaseCount from './components/IncreaseCount';
import DecreaseCount from './components/DecreaseCount';
import Input from './components/Input';

const App = (context) => {
	const { state } = context;

	return <div className="App">
		<div>{state.count}</div>
		<IncreaseCount { ...context }/>
		<DecreaseCount { ...context }/><br/>
		<Input { ...context }/><br/>
		<div>Your Name is :{state.firstName}</div>
	</div>;
};

export default App;
