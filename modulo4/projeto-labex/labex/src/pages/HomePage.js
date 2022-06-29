import React from "react"; 
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const PeopleBackground = styled.div`
    width: 70%;
    height: 100vh;
    background-image: url(https://scitechdaily.com/images/NASA-SpaceX-Crew-4-Astronauts-scaled.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const GalaxyBackground = styled.div`
    width: 30%;
    height: 100vh;
    background-image: url(https://images.unsplash.com/photo-1539721972319-f0e80a00d424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80);
    filter: grayscale(100%);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const PersonelButton = styled.button`
	height: 5vh;
	width: 12vw;
	font-family: 'Courier New', Courier, monospace;
	margin: 4px;
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
const DestinationsButton = styled.button`
	height: 7vh;
	width: 25vw;
	font-family: 'Courier New', Courier, monospace;
	margin: 4px;
	padding: 0.5%;
	border-radius: 10px;
	border: 0;
	font-weight: bolder;
	&:hover {
		background-color: darkslategray;
        color: white;
	}
    justify-self: center;
    align-self: center;
    margin-top: 80%;
    transition: 0.5s;
`;
const Logo = styled.div`
	width: 15%;
	height: 10%;
	margin: 1%;
	background-color: white;
	border: 3px solid black;
	border-radius: 14px;
	text-align: center;
    color: black;
	padding: 1px;
    margin-left: 5%;
    margin-bottom: 35%;
	& > h1 {
		margin: 0;
		padding: 0;
	}
	& > p {
		margin: 0;
	}
`;
const Slogan = styled.h3`
    background-color: white;
	font-size: 20px;
	box-shadow: 1px 1px black;
	margin: 5%;
	padding: 2%;
	border-radius: 10px;
	border: 3px solid black;
    text-align: center;
`

const HomePage = () => {
    //Navigation
    const navigate = useNavigate()

    const loginPage = () => {
        navigate("/login")
    }

    const destinationsPage = () => {
        navigate("/trips/list")
    }

    return(
        <HomeContainer>
            <PeopleBackground>
                <Logo>
					<h1>LabeX</h1>

					<p>Since 2004.</p>
				</Logo>

                <Slogan>Flying you to your dreams since 2004.</Slogan>
            </PeopleBackground>
            
            <GalaxyBackground>
                <PersonelButton onClick={loginPage}>Personel Area</PersonelButton>

                <DestinationsButton onClick={destinationsPage}>Explore our destinations</DestinationsButton>
            </GalaxyBackground>           
        </HomeContainer>
    )
}

export default HomePage;