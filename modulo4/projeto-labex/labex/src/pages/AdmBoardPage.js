import React from "react"; 
import { useNavigate } from "react-router-dom";

function AdmBoardPage() {
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    const newTripPage = () => {
        navigate("/admin/trips/create")
    }

    const homePage = () => {
        navigate("/")
    }
    
    return(
        <>
            <button onClick={back}>Back</button>

            <button onClick={newTripPage}>New Trip</button>
            
            <button onClick={homePage}>Logout</button>
        </>
    )
}

export default AdmBoardPage;