import React from "react";
import styled from "styled-components";
import SecaoInput from "./components/SecaoInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(https://browsecat.net/sites/default/files/desert-4k-sand-wallpapers-41669-468145-2834994.png);
  background-size: 1400px 620px;
  background-repeat: no-repeat;
`;

const SecaoMensagens = styled.div`
  border: 1px rgb(30, 129, 176) solid;
  width: 500px;
  height: 594px;
  background-color: rgb(30, 129, 176, 0.2);
  border-radius: 15px;
  color: #2a50bf;
  display: flex;
  flex-direction: column;
`;

const Nome = styled.p`
  font-weight: bold;
`;
const MensagemCompleta = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
  margin-right: 16px;
  background-color: #f9bd74;
  border-radius: 20px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      mensagens: [],
    };
  }

  adicionarMensagens = (message) => {
    this.setState({ mensagens: [...this.state.mensagens, message] });
  };

  render() {
    const listaRenderizada = this.state.mensagens.map((mensagem, index) => {
      return (
        <MensagemCompleta key={index}>
          <Nome>{mensagem.usuario}:&emsp;</Nome>
          {mensagem.mensagem}
        </MensagemCompleta>
      );
    });

    return (
      <Container>
        <SecaoMensagens>{listaRenderizada}</SecaoMensagens>
        
        <SecaoInput adicionarMensagens={this.adicionarMensagens} />
      </Container>
    );
  }
}

export default App;
