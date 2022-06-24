import React from "react"; 
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import styled from "styled-components";
import useForm from "../hooks/useForm";


const LoginContainer = styled.div`
    height: 100vh;
    background-image: url(https://images.unsplash.com/photo-1539721972319-f0e80a00d424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1ZSUyMHNwYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80);
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const InputBox = styled.input`
    height: 5%;
    width: 20%;
    padding: .5%;
    border-radius: 10px;
`
const LoginButton = styled.button`
    height: 5vh;
    width: 12vw;
    font-family: 'Courier New', Courier, monospace;
    margin: 4px;
    padding: .5%;
    border-radius: 10px;
    border: 0;
    font-weight: bolder;
    &:hover{
        background-color: grey;
    }
    
`
const BackButton = styled.button`
    height: 5vh;
    width: 12vw;
    font-family: 'Courier New', Courier, monospace;
    margin: 4px;
    padding: .5%;
    background-color: transparent;
    text-decoration: underline;
    border: 0;
    font-weight: bolder;
    color: white;
    &:hover{
        color: green;
    }
`

function LoginPage() {
    
// Controlled inputs
    const {form, onChange, cleanFields} = useForm({email: '', password: ''})

// Navigation   
    const navigate = useNavigate()
    
    const homeButton = () => {
        navigate("/")
    }

    const onSubmitLogin = (event) => {
        event.preventDefault()

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/giovanna-julio-hooks/login`

        axios.post(url, form)
            .then((response)=>{
                localStorage.setItem("token", response.data.token)
                navigate("/admin/trips/list")
            })
            .catch((error)=>{
                alert("E-mail/Password does not match database.")
                cleanFields()
            })
    }

    return(
        <LoginContainer>
            <form onSubmit={onSubmitLogin}>
            <InputBox onChange={onChange} required name="email" placeholder="E-mail" value={form.email} type="email"/>
            <InputBox onChange={onChange} required name="password" placeholder="Password" value={form.password} type="password"/>
            

            <LoginButton>Login</LoginButton>
            
            </form>    
            <BackButton onClick={homeButton}>Home</BackButton>    
            
            

            
        </LoginContainer>
    )
}

export default LoginPage;