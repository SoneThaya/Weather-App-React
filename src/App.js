import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/Component';

function App() {
	return (
		<div className="App">
			<WeatherCard temp={-10} />
			<WeatherCard temp={20} />
			<WeatherCard temp={30} />
		</div>
	);
}

export default App;
