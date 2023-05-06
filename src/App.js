import { React } from 'react';
import './App.scss';
import IncreaseCount from './components/IncreaseCount';

const App = (context) => {
	const { state } = context;

	return <div className="App">
		<div>{state.count}</div>
		<IncreaseCount { ...context }/>
	</div>;
};

export default App;
