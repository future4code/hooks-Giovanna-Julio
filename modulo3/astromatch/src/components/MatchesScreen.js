import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const MatchIcon = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;
const MatchItem = styled.p`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding-left: 10px;
	color: white;
	text-shadow: 2px 2px 3px rgba(237, 68, 81, 255);
`;
const ResetContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;



const MatchesScreen = () => {
	const [matchList, setMatchList] = useState([]);

	useEffect(() => {
		const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giovanna-julio/matches`;

		const headers = {
			headers: {
				Authorization: 'giovanna-julio-hooks',
			},
		};

		axios.get(url, headers)
			.then((response) => {
				setMatchList(response.data.matches);
			})
			.catch((error) => {
				console.log(error.response);
			});
	}, [matchList]);

	const renderMatchList = matchList.map((match) => {
		return (
			<MatchItem key={match.id}>
				<MatchIcon src={match.photo} />&nbsp;{match.name}
			</MatchItem>
		);
	});

	const resetMatches = () => {
		const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giovanna-julio/clear`;

		const headers = {
			headers: {
				Authorization: 'giovanna-julio-hooks',
			},
		};

		axios.put(url, headers)
			.then((response) => {
				alert('A brand new start for you <3');
			})
			.catch((error) => {
				alert(error.response);
			});
	};


  
	return (
		<>
			{renderMatchList}

			<ResetContainer>
				<button onClick={resetMatches}>Reset History</button>
			</ResetContainer>
		</>
	);
};

export default MatchesScreen;
