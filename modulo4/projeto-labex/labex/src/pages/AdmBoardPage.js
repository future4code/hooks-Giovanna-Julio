import axios from "axios";
import React from "react"; 
import { useNavigate } from "react-router-dom";
import useProtectPage from "../hooks/useProtectPage";
import useTripsList from "../hooks/useTripsList";


const AdmBoardPage = () => {
    
// Protected page
    useProtectPage()

//Navigation
    const navigate = useNavigate()

    const newTripPage = () => {
        navigate("/admin/trips/create")
    }

    const homePage = () => {
        navigate("/")
    }

// Data Management
    const trips = useTripsList()

    const onClickDetails = (id) => {
        localStorage.setItem("trip", id)
        navigate(`/admin/trips/${id}`)
    }

    const onClickDelete = (id) => {
        
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovanna-julio-hooks/trips/${id}`
        
        const headers = {
            headers: {
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ilp3N0tNUEp2RmFqRmtmUlE4N3RBIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MTc5MDE4NDd9.yKi2emMJ-Ln3fNigx09HNZIDWPEhF8e_WnbYAAd1r2k'
            }
        }

        axios.delete(url, headers)
            .then((response)=>{
                alert("Mission aborted successfully.")
            })
            .catch((error) => {
                alert("Mission couldn't be aborted this time.")
                console.log(error.response)
            })
    }



    return(
        <>
            <div>
                <h1>LabeX - Personel</h1>
                <button onClick={newTripPage}>New Trip</button>
                
                <button onClick={homePage}>Logout</button>
            </div>

            <h2>Manage trips:</h2>
            
            {trips.map((trip)=>{
                return <div key={trip.id}>
                    <p>{trip.name}</p>
                    <button onClick={() => onClickDetails(trip.id)}>Details</button>
                    <button onClick={() => onClickDelete(trip.id)}>Delete</button>
                </div>
            })}
            
        </>
    )
}

export default AdmBoardPage;