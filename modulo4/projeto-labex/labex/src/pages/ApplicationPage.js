import React from "react"; 
import { useNavigate } from "react-router-dom";

function ApplicationPage() {
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    return(
        <>
            <button onClick={back}>Back</button>

            <button>Submit</button>
        </>
    )
}

export default ApplicationPage;