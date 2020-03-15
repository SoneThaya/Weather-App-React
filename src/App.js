import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/Component';

function App() {
	return (
		<div className="App">
			<WeatherCard temp="28" />
			<WeatherCard temp="10" />
			<WeatherCard temp="40" />
		</div>
	);
}

export default App;
