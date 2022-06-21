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
    background-color: pink;
    background-image: url(https://scitechdaily.com/images/NASA-SpaceX-Crew-4-Astronauts-scaled.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    color: blue;
    opacity: .7;
    &:hover{
        opacity: 1;
    }
`
const GalaxyBackground = styled.div`
    width: 30%;
    height: 100vh;
    background-color: blue;
    background-image: url(https://images.unsplash.com/photo-1539721972319-f0e80a00d424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80);
    opacity: .7;
    &:hover{
        opacity: 1;
    }
`


function HomePage() {
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
                <h1>LabeX</h1>

                <p>Flying you to your dreams since 2004.</p>
            </PeopleBackground>
            
            <GalaxyBackground>
                <button onClick={loginPage}>Personel Area</button>

                <button onClick={destinationsPage}>Explore our destinations</button>
            </GalaxyBackground>           
        </HomeContainer>
    )
}

export default HomePage;