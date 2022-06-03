import React from "react";
import styled from "styled-components";

const InputHolder = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
`;
const InputUsuario = styled.input`
  width: 100px;
  border-radius: 10px;
  border: 1px black solid;
  background-color: rgba(79, 174, 232, 255);
  border: 1px rgb(30, 129, 176) solid;
  color: #752e2a;
`;

const InputMensagem = styled.input`
  width: 300px;
  border-radius: 10px;
  border: 1px;
  background-color: rgba(79, 174, 232, 255);
  border: 1px rgb(30, 129, 176) solid;
  color: #752e2a;
`;

const BotaoEnviar = styled.button`
  width: 100px;
  border-radius: 10px;
  border: 1px;
  background-color: rgba(35, 83, 194, 255);
  border: 1px rgb(30, 129, 176) solid;
  color: darkblue;
  font-weight: bold;
`;

class SecaoInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usuario: "",
      mensagem: "",
    };
  }

  onChangeUsuario = (event) => {
    this.setState({ usuario: event.target.value });
  };

  onChangeMensagem = (event) => {
    this.setState({ mensagem: event.target.value });
  };

  onClickEnviar = () => {
    const mensagem = {
      usuario: this.state.usuario,
      mensagem: this.state.mensagem,
    };

    this.props.adicionarMensagens(mensagem);

    this.setState({ usuario: "" });
    this.setState({ mensagem: "" });
  };

  render() {
    return (
      <InputHolder>
        <InputUsuario
          placeholder="Usuário"
          value={this.state.usuario}
          onChange={this.onChangeUsuario}
        />

        <InputMensagem
          placeholder="Mensagem"
          value={this.state.mensagem}
          onChange={this.onChangeMensagem}
        />
        
        <BotaoEnviar onClick={this.onClickEnviar}>Enviar</BotaoEnviar>
      </InputHolder>
    );
  }
}

export default SecaoInput;
