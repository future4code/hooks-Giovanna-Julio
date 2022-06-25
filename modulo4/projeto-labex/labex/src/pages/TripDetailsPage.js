import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useProtectPage from '../hooks/useProtectPage';
import axios from 'axios';
import styled from 'styled-components';

const BoardContainer = styled.div`
    background-color: grey;
    height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
`;
const Header = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
    & > h1{
        margin-left: 2%;
    }
    & > div {
        & > button {
            height: 5vh;
            width: 12vw;
            font-family: 'Courier New', Courier, monospace;
            margin: 4px;
            padding: 0.5%;
            border-radius: 10px;
            border: 0;
            font-weight: bolder;
            &:hover {
                background-color: grey;
            }
        }
    }
`;
const TripDetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 3px solid black;
    width: 90%;
    align-self: center;
    background-color: lightgray;
    border-radius: 14px;
    overflow: auto;
    padding: 1%;
`
const CandidateFile = styled.div`
    overflow: auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    height: 100%;
    & > h3 {
        align-self: flex-start;
        justify-self: flex-start;
    }
`
const ChooseButton = styled.button`
    height: 5vh;
	width: 12vw;
	font-family: 'Courier New', Courier, monospace;
	margin: 4px;
	padding: 0.5%;
	border-radius: 10px;
	border: 0;
	font-weight: bolder;
	&:hover {
		background-color: grey;
	}
`

const TripDetailsPage = () => {
	// Protected page
	useProtectPage();

	// Navigation
	const navigate = useNavigate();

	const back = () => {
		navigate(-1);
	};

	const onClickNewTripPage = () => {
		navigate('/admin/trips/create');
	};

	const onClickLogout = () => {
		navigate('/');
		localStorage.setItem('token', '');
	};

	// Get Trip Details
	const [trip, setTrip] = useState({});

	useEffect(() => {
		const tripId = localStorage.getItem('trip');

		const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovanna-julio-hooks/trip/${tripId}`;

		const headers = {
			headers: {
				auth: localStorage.getItem('token'),
			},
		};

		axios
			.get(url, headers)
			.then((response) => {
				setTrip(response.data.trip);
			})
			.catch((error) => {
				console.log(error.response.data.message);
			});
	}, [trip]);

    //Choose Candidate
	const onClickDecide = (candidateId, decision) => {
		const tripId = localStorage.getItem('trip');

		const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovanna-julio-hooks/trips/${tripId}/candidates/${candidateId}/decide`;

		const headers = {
			headers: {
				auth: localStorage.getItem('token'),
			},
		};

		const body = {
			approve: decision,
		};

		axios
			.put(url, body, headers)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	return (
		<BoardContainer>
			<Header>
				<h1>LabeX - Personel</h1>

                <div>
                    <button onClick={back}>Back</button>

                    <button onClick={onClickNewTripPage}>New Trip</button>

                    <button onClick={onClickLogout}>Logout</button>
                </div>
			</Header>

            <br/>

			<TripDetailsContainer>
				<div>
					<h2>{trip.name}</h2>

					<div>
						<p>{trip.description}</p>
						<p>
							{trip.planet} - {trip.durationInDays} days -{' '}
							{trip.date}
						</p>
					</div>

					<div>
						<h3>Approved Candidates:</h3>
						{trip.approved &&
							trip.approved.map((person) => {
								return <li key={person.id}>{person.name}</li>;
							})}
					</div>
				</div>

				<CandidateFile>
					<h3>Candidate Selection:</h3>
					{trip.candidates && trip.candidates.map((person) => {
							return (
								<div key={person.id}>
									<h4>{"->"} {person.name}, {person.age}</h4>

									<p>{person.profession} - {person.country}</p>

									<p>{person.applicationText}</p>

									<ChooseButton onClick={() => onClickDecide(person.id, true)}>Approve</ChooseButton>

									<ChooseButton onClick={() => onClickDecide(person.id, false)}>Dismiss</ChooseButton>
								</div>
							);
						})}
				</CandidateFile>
			</TripDetailsContainer>
		</BoardContainer>
	);
};

export default TripDetailsPage;
