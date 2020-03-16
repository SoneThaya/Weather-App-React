import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/Component';

function App() {
	return (
		<div className="App">
			<WeatherCard temp={-10} condition="Clear" city='Sydney' country='AU' />
			<WeatherCard temp={20} condition="Dust" city='Melbourne' country='AU' />
			<WeatherCard temp={30} condition="Tornado" city='London' country='GB' />
		</div>
	);
}

export default App;
