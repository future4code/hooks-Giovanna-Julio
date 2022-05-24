import React from "react";
import styled from "styled-components";
import axios from "axios";

const Cadastro = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  border: 1px solid grey;
  justify-content: center;
  align-items: center;
  color: orange;
`;

class CadastroUsuario extends React.Component {
  state = {
    emailInput: "",
    nomeInput: "",
  };

  onChangeEmail = (event) => {
    this.setState({ emailInput: event.target.value });
    console.log(this.state.emailInput);
  };

  onChangeNome = (event) => {
    this.setState({ nomeInput: event.target.value });
    console.log(this.state.nomeInput);
  };

  criarUsuario = () => {
    const urlUsuarios =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const headers = {
      headers: {
        Authorization: "giovanna-julio-hooks",
      },
    };

    const body = {
      name: this.state.nomeInput,
      email: this.state.emailInput,
    };

    axios
      .post(urlUsuarios, body, headers)
      .then((response) => {
        alert("Usuário criado com sucesso!");
        console.log(response.data);
        this.setState({ emailInput: "" });
        this.setState({ nomeInput: "" });
      })
      .catch((error) => {
        alert("Erro inesperado, tente novamente mais tarde.");
        console.log(error.response);
        this.setState({ emailInput: "" });
        this.setState({ nomeInput: "" });
      });
  };

  render() {
    return (
      <Cadastro>
        <h2>Labenusers Cadastro</h2>
        
        <input
          placeholder="E-mail"
          value={this.state.emailInput}
          onChange={this.onChangeEmail}
        />
        
        <input
          placeholder="Nome"
          value={this.state.nomeInput}
          onChange={this.onChangeNome}
        />
        
        <br/>
        
        <button onClick={this.criarUsuario}>Enviar</button>
      </Cadastro>
    );
  }
}

export default CadastroUsuario;
