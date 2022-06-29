import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useTripsList from '../hooks/useTripsList';

const DestContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-image: url(https://images.unsplash.com/photo-1539721972319-f0e80a00d424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80);
	filter: grayscale(100%);
	background-repeat: no-repeat;
	background-size: cover;
	color: white;
	height: 100vh;
    overflow: auto;
`;
const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;
const Destinations = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Logo = styled.div`
	width: 10%;
	height: 60%;
	margin: 1%;
	background-color: white;
	border: 3px solid black;
	border-radius: 14px;
	text-align: center;
    color: black;
	padding: 1px;
	& > h1 {
		margin: 0;
		padding: 0;
	}
	& > p {
		margin: 0;
	}
`;
const BackButton = styled.button`
	height: 5vh;
	width: 8vw;
	font-family: 'Courier New', Courier, monospace;
	align-self: flex-start;
	padding: 0.5%;
	border-radius: 10px;
	border: 0;
	font-weight: bolder;
	&:hover {
		background-color: darkslategray;
        color: white;
	}
    transition: 0.5s;
`;
const TripContainer = styled.div`
    width: 40vw;
    height: 20vh;
    background-color: white;
    color: black;
    margin: 1%;
    padding: 1%;
    overflow: auto;
    border: 2px solid black;
    border-radius: 14px;
`
const ApplyButton = styled.button`
    height: 7vh;
	width: 10vw;
	font-family: 'Courier New', Courier, monospace;
	margin: 4px;
    margin-bottom: 4px;
	padding: .5%;
	border-radius: 10px;
	border: 0;
	font-weight: bolder;
	&:hover {
		background-color: darkslategray;
        color: white;
	}
    transition: 0.5s;
`



const DestinationsPage = () => {
	// Navigation
	const navigate = useNavigate();

	const back = () => {
		navigate(-1);
	};

	const applicationPage = () => {
		navigate('/trips/application');
	};

	// Get Trips
	const tripList = useTripsList()

	return (
		<DestContainer>
			<Header>
                <Logo>
					<h1>LabeX</h1>
                    
					<p>Since 2004.</p>
				</Logo>

				<BackButton onClick={back}>Back</BackButton>
			</Header>

			<Destinations>
				<h1>Destinations</h1>

				{tripList.map((trip) => {
					return (
						<TripContainer key={trip.id}>
							<h3>{trip.name}</h3>

							<p>{trip.description}</p>

							<p>
								{trip.planet} - {trip.durationInDays} days -{' '}
								{trip.date}
							</p>
						</TripContainer>
					);
				})}

				<br />

				<ApplyButton onClick={applicationPage}>Apply now!</ApplyButton>
			</Destinations>
		</DestContainer>
	);
};

export default DestinationsPage;
