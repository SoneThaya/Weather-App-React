import React from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard/Component';

const key = process.env.REACT_APP_KEY

function App() {

	const data = async () => {
		const apiRes = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,gb&units=imperial&APPID=${key}`);
		const resJSON = await apiRes.json();
		return resJSON;

	}

	data().then(res => {
		console.log(res.main.feels_like)
		console.log(res.main.temp)
	})

	return (
		<div className="App">
			<WeatherCard temp={-10} condition="Clear" city='Sydney' country='AU' />
			<WeatherCard temp={20} condition="Dust" city='Melbourne' country='AU' />
			<WeatherCard temp={30} condition="Tornado" city='London' country='GB' />
		</div>
	);
}

export default App;
