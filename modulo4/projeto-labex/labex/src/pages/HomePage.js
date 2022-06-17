import React from "react"; 
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate()

    const loginPage = () => {
        navigate("/login")
    }

    const destinationsPage = () => {
        navigate("/trips/list")
    }

    return(
        <>
            <button onClick={loginPage}>Personel Area</button>

            <button onClick={destinationsPage}>See trips</button>
        </>
    )
}

export default HomePage;