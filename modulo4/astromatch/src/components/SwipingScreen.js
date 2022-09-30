import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const OptionContainer = styled.div`
    height: 420px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const OptionPhoto = styled.img`
	width: 350px;
	height: 300px;
	position: absolute;
	bottom: 160px;
	box-shadow: 2px 2px 2px 2px rgba(17, 11, 40, 255);
	border-radius: 1%;
`;
const OptionInfo = styled.div`
	position: relative;
	bottom: -250px;
	padding-left: 50px;
	padding-right: 50px;
	color: white;
	text-shadow: 2px 2px 3px rgba(237, 68, 81, 255);
`;
const VeredictContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;
const SwipeRight = styled.button`
	padding: 10px 20px;
	border-radius: 100%;
	font-size: 30px;
	color: green;
	border: 2px solid green;
	background-color: rgb(35, 16, 77);
	box-shadow: 1px 1px 1px 1px rgba(17, 11, 40, 255);
`;
const SwipeLeft = styled.button`
	padding: 10px 20px;
	border-radius: 100%;
	font-size: 30px;
	color: red;
	border: 1px solid red;
	background-color: rgb(35, 16, 77);
	box-shadow: 1px 1px 1px 1px rgba(17, 11, 40, 255);
`;



const SwipingScreen = () => {
	const [option, setOption] = useState({});

	useEffect(() => {
		getProfile();
	}, []);

	const getProfile = () => {
		const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giovanna-julio/person`;

		const headers = {
			headers: {
				Authorization: 'giovanna-julio-hooks',
			},
		};

		axios
			.get(url, headers)
			.then((response) => {
				setOption(response.data.profile);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	const onClickChoose = () => {
		const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/giovanna-julio/choose-person`;

		const headers = {
			headers: {
				Authorization: 'giovanna-julio-hooks',
			},
		};

		const body = {
			id: option.id,
			choice: true,
		};

		axios
			.post(url, body, headers)
			.then((response) => {
				console.log(response.data);
				getProfile();
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	const onClickEw = () => {
		getProfile();
	};



	return (
		<>
		    <OptionContainer>
				<OptionPhoto src={option.photo} alt={option.photo_alt} />

				<OptionInfo>
					<h2>{option.name}, {option.age}</h2>

					<p>{option.bio}</p>
				</OptionInfo>
			</OptionContainer>

			<VeredictContainer>
				<SwipeLeft onClick={onClickEw}>X</SwipeLeft>
                
				<SwipeRight onClick={onClickChoose}>♥️</SwipeRight>
			</VeredictContainer>
		</>
	);
};

export default SwipingScreen;
