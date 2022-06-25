import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProtectPage from '../hooks/useProtectPage';
import useTripsList from '../hooks/useTripsList';
import styled from 'styled-components';

const BoardContainer = styled.div`
    background-color: grey;
    height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    & > h2 {
        margin-left: 15%;
    }
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
const ManagementContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border: 3px solid black;
    width: 70%;
    align-self: center;
    background-color: lightgray;
    border-radius: 14px;
`;
const TripCard = styled.div`
    width: 95%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & > div {
        & > button {
            height: 5vh;
            width: 7vw;
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

const AdmBoardPage = () => {
	// Protected page
	useProtectPage();

	//Navigation
	const navigate = useNavigate();

	const newTripPage = () => {
		navigate('/admin/trips/create');
	};

	const homePage = () => {
		navigate('/');
	};

	// Data Management
	const trips = useTripsList();

	const onClickDetails = (id) => {
		localStorage.setItem('trip', id);
		navigate(`/admin/trips/${id}`);
	};

	const onClickDelete = (id) => {
		const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovanna-julio-hooks/trips/${id}`;

		const headers = {
			headers: {
				auth: localStorage.getItem("token"),
			},
		};

		axios
			.delete(url, headers)
			.then((response) => {
				alert('Mission aborted successfully.');
			})
			.catch((error) => {
				alert("Mission couldn't be aborted this time.");
				console.log(error.response);
			});
	};

	return (
		<BoardContainer>
			<Header>
				<h1>LabeX - Personel</h1>

                <div>
                    <button onClick={newTripPage}>New Trip</button>

				    <button onClick={homePage}>Logout</button>
                </div>
			</Header>

			<h2>Manage trips:</h2>
            <ManagementContainer>
                {trips.map((trip) => {
                    return (
                        <TripCard key={trip.id}>
                            <p>{trip.name}</p>

                            <div>
                                <button onClick={() => onClickDetails(trip.id)}>Details</button>

                                <button onClick={() => onClickDelete(trip.id)}>Delete</button>
                            </div>
                        </TripCard>
                    );
                })}
            </ManagementContainer>
		</BoardContainer>
	);
};

export default AdmBoardPage;
