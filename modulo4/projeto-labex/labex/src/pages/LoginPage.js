import React from "react"; 
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    const admBoardPage = () => {
        navigate("/admin/trips/list")
    }

    return(
        <>
            <button onClick={back}>Back</button>

            <button onClick={admBoardPage}>Login</button>
        </>
    )
}

export default LoginPage;