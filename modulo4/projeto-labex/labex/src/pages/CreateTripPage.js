import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProtectPage from '../hooks/useProtectPage';
import useForm from '../hooks/useForm';
import axios from 'axios';
import styled from 'styled-components';


const NewTripContainer = styled.div`
    background-color: grey;
    height: 100vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    & > h2 {
        margin-left: 35%;
    }
    & > form {
        display: flex;
        flex-direction: column;
        margin: 0 30%;
        height: 40%;
        & > input {
            height: 50%;
            
            padding: 0.5%;
            border-radius: 10px;
            border: 2px solid black;
        }
        & > button {
            height: 20vh;
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
            width: 8vw;
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

const CreateTripPage = () => {
	// Protected page
	useProtectPage();

	// Navigation
	const navigate = useNavigate();

	const back = () => {
		navigate(-1);
	};

	const homePage = () => {
		navigate('/');
	};

	// Form
	const { form, onChange, cleanFields } = useForm({
		name: '',
		planet: '',
		date: '',
		description: '',
		durationInDays: 0,
	});

	const onSubmitNewTrip = (event) => {
		event.preventDefault();

		const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovanna-julio-hooks/trips`;

		const headers = {
			headers: {
				auth: localStorage.getItem('token'),
			},
		};

		axios
			.post(url, form, headers)
			.then((response) => {
				alert('Mission initialized successfully!');
				cleanFields();
			})
			.catch((error) => {
				alert('Mission could not be initialized this time. Try again.');
				console.log(error.response);
			});
	};



	return (
		<NewTripContainer>
			<Header>
				<h1>LabeX - Personel</h1>

                <div>
                    <button onClick={back}>Back</button>

				    <button onClick={homePage}>Logout</button> 
                </div>
			</Header>

			<h2>Insert trip details bellow:</h2>

			<form onSubmit={onSubmitNewTrip}>
				<input
					onChange={onChange}
					required
					name='name'
					placeholder='Title'
					value={form.name}
					type='text'
				/>

				<input
					onChange={onChange}
					required
					name='date'
					value={form.date}
					type='date'
				/>

				<input
					onChange={onChange}
					required
					name='planet'
					placeholder='Planet'
					value={form.planet}
					type='text'
				/>

				<input
					onChange={onChange}
					required
					name='description'
					placeholder='Description'
					value={form.description}
					type='text'
					maxLength='200'
				/>
                
				<input
					onChange={onChange}
					required
					name='durationInDays'
					placeholder='Duration in Days'
					value={form.durationInDays}
					type='number'
				/>

				<button>Create This Trip</button>
			</form>
		</NewTripContainer>
	);
};

export default CreateTripPage;
