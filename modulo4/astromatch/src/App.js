import React, { useState } from 'react';
import styled from 'styled-components';
import MatchesScreen from './components/MatchesScreen';
import SwipingScreen from './components/SwipingScreen';


const Container = styled.div`
	background-color: pink;
	background-image: url(https://i.pinimg.com/originals/02/f2/64/02f2649eaa7743a8e0a117c3e0a386ee.jpg);
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Card = styled.main`
	height: 595px;
	width: 450px;
	margin: 10px;
	background-color: rgb(35, 16, 77);
	box-shadow: 1px 1px 3px 2px rgba(17, 11, 40, 255);
`;
const Header = styled.header`
	height: 10%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	color: rgba(237, 68, 81, 255);
	text-shadow: 2px 2px 3px #8263e9;
	font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
		'Lucida Sans', Arial, sans-serif;
`;



const App = () => {
	const [display, setDisplay] = useState('swipe');
	const [buttonName, setButtonName] = useState('See Matches');

	const onClickSwitch = () => {
		if (display === 'swipe') {
			setDisplay('matches');
			setButtonName('Get swiping!');
		} else if (display === 'matches') {
			setDisplay('swipe');
			setButtonName('See Matches');
		}
	};

	const displayRender = () => {
		switch (display) {
			case 'swipe':
				return <SwipingScreen />;
			case 'matches':
				return <MatchesScreen />;
			default:
				return 'Error!';
		}
	};


  
	return (
		<Container>
			<Card>
				<Header>
					<h1>AstroMatch ♥️</h1>

					<button onClick={onClickSwitch}>{buttonName}</button>
				</Header>

				<hr />

				<div>{displayRender()}</div>
			</Card>
		</Container>
	);
};

export default App;
