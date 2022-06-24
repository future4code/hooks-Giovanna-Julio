import React from "react"; 
import { useNavigate } from "react-router-dom";
import useProtectPage from "../hooks/useProtectPage";

function CreateTripPage() {

// Protected page
    useProtectPage()

    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    const homePage = () => {
        navigate("/")
    }

    return(
        <>
            <button onClick={back}>Back</button>

            <button onClick={homePage}>Logout</button>

            <button>Create This Trip</button>
        </>
    )
}

export default CreateTripPage;