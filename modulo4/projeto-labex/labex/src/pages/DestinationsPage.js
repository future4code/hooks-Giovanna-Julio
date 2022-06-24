import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DestContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(https://images.unsplash.com/photo-1539721972319-f0e80a00d424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80);
    filter: grayscale(100%);
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    height: 100vh;
`
const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
const Destinations = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Logo = styled.h1`
    margin: 2%;
    margin-right: 70%;
`
const StyledButton = styled.button`
    margin: 2%;
`

function DestinationsPage () {
    
// Navigation
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    const applicationPage = () => {
        navigate("/trips/application")
    }

// Get Trips
    const [tripList, setTripList] = useState([])

    useEffect(()=>{
       
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovanna-julio-hooks/trips`)
            .then((response)=>{
                setTripList(response.data.trips)
            })
            .catch((error)=>{
                console.log(error.response)
            })   
                 
    }, [])

    

    return(
        <DestContainer>
            <Header>
                <Logo>LabeX</Logo>

                <StyledButton onClick={back}>Back</StyledButton>
            </Header>
            
            <Destinations>
                <h2>Destinations</h2>

                {tripList.map((trip)=>{
                    return <div key={trip.id}>
                        <h3>{trip.name}</h3>

                        <p>{trip.description}</p>

                        <p>{trip.planet} - {trip.durationInDays} days - {trip.date}</p>
                    </div>
                })} 
                
                <br/>
                <button onClick={applicationPage}>Apply now!</button>
            </Destinations>

            
        </DestContainer>
    )
}

export default DestinationsPage;