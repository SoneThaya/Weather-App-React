import React from 'react';
import Location from './Location';
import Condition from './Condition';
import Icon from './Icon';

import styled from '@emotion/styled';

const WeatherCard = (props) => {

	let Card = styled.div`
		margin: 0 auto;
		background: linear-gradient(to bottom, red, pink);
		width: 200px;
		height: 240px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		border-radius: 15px;
	`

	return (
		<Card>
			<Location />
			<Icon />
			<Condition />
		</Card>
	);
};

export default WeatherCard;
