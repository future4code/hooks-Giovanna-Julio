import React from "react"; 
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from '../img/logo.png'

const LogoImage = styled.img`
    width: 15%;
    height: 17%;
    border-radius: 10%;
    box-shadow: 1px 1px black;
    margin: 5%;
`
const ApplicationContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const MarketingScope = styled.div`
    width: 60%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: url(https://i.insider.com/5fce065b037cbd001861424e?width=1136&format=jpeg);
    background-repeat: no-repeat;
    background-size: cover;
`
const MarketingHook = styled.h3`
    background-color: white;
    font-size: 20px;
    box-shadow: 1px 1px black;
    margin: 5%;
    border-radius: 5%;
    padding: 2%;
`
const FormContainer = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(https://images.unsplash.com/photo-1539721972319-f0e80a00d424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80);
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
`

function ApplicationPage() {
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    return(
        <ApplicationContainer>
            <MarketingScope>
                <LogoImage src={Logo} alt="LabeX"/>
                <MarketingHook>Have you ever dreamt of experiencing the best of space travels? At LabeX™ we can make your dreams come true. There are those who think only destinations matter; Here, we too understand that the journey is key to delivering a wholesome memory.</MarketingHook>
            </MarketingScope>
            
            <FormContainer>
                <h2>Application Form</h2>
                <input/>
                <input/>
                <input/>
                <input/>
                <input/>
                <input/>
                
                <div>
                    <button onClick={back}>Back</button>

                    <button>Submit</button>
                </div>
            </FormContainer>
            
        </ApplicationContainer>
    )
}

export default ApplicationPage;