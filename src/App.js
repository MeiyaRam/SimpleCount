import { React } from 'react';
import './App.scss';
import IncreaseCount from './components/IncreaseCount';
import DecreaseCount from './components/DecreaseCount';

const App = (context) => {
	const { state } = context;

	return <div className="App">
		<div>{state.count}</div>
		<IncreaseCount { ...context }/>
		<DecreaseCount { ...context }/>
	</div>;
};

export default App;
