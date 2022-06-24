import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import useProtectPage from "../hooks/useProtectPage";
import axios from "axios";

function TripDetailsPage() {

// Protected page
    useProtectPage()
 
// Navigation
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    const onClickNewTripPage = () => {
        navigate("/admin/trips/create")
    }

    const onClickLogout = () => {
        navigate("/")
        localStorage.setItem("token", '')
    }

// Get Trip Details
    const [trip, setTrip] = useState({})  
    
    

    useEffect(() => {
        const tripId = localStorage.getItem("trip")
        
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovanna-julio-hooks/trip/${tripId}`;

        const headers = {
          headers: {
            auth: localStorage.getItem("token")
          }
        };
    
        axios.get(url, headers)
            .then((response) => {
                setTrip(response.data.trip);
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
      }, []);
      

    return(
        <>
            <div>
                <h1>LabeX - Personel</h1>
                
                <button onClick={back}>Back</button>

                <button onClick={onClickNewTripPage}>New Trip</button>
                
                <button onClick={onClickLogout}>Logout</button>
            </div>

            <div>
                <div>
                    <h2>{trip.name}</h2>

                    <div>
                        <p>{trip.description}</p>
                        <p>{trip.planet} - {trip.durationInDays} days - {trip.date}</p>
                    </div>

                    <div>
                       
                    </div>
                </div>

                <div>
                
                </div>
            </div>
           
        </>
    )
}

export default TripDetailsPage;