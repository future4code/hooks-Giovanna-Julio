import React from "react";
import styled from "styled-components";
import axios from "axios";

const urlUsuarios = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
    headers: {
      Authorization: "giovanna-julio-hooks"
    }
  };


class CadastroUsuario extends React.Component {
    
    state = {
        emailInput: "",
        nomeInput: ""
    }

    onChangeEmail = (event) => {
        this.setState({emailInput: event.target.value})
    }

    onChangeNome = (event) => {
        this.setState({nomeInput: event.target.value})
    }

    criarUsuario = () => {
        const body = {
            name: this.state.nomeInput,
            email: this.state.emailInput
        }

        axios.post(urlUsuarios, body, headers)
            .then((response) => {
                alert("Usuário criado com sucesso!")
                this.setState({emailInput: ""})
                this.setState({nomeInput: ""})
            })
            .catch((err) => {
                alert("Erro inesperado, tente novamente mais tarde.")
                this.setState({emailInput: ""})
                this.setState({nomeInput: ""})
            })
    }
    
    render(){
        return(
            <>
                <input placeholder="E-mail" value={this.state.emailInput} onChange={this.onChangeEmail}/>
                <input placeholder="Nome" value={this.state.nomeInput} onChange={this.onChangeNome}/>
                <button onClick={this.criarUsuario}>Enviar</button>
            </>
        )
    }
}

export default CadastroUsuario;
