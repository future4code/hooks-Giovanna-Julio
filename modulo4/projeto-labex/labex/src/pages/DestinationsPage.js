import React from "react"; 
import { useNavigate } from "react-router-dom";

function DestinationsPage () {
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    const applicationPage = () => {
        navigate("/trips/application")
    }
    
    return(
        <>
            <button onClick={back}>Home</button>

            <button onClick={applicationPage}>Apply now!</button>
        </>
    )
}

export default DestinationsPage;