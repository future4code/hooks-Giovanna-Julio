import React from "react";
import styled from "styled-components";
import CadastroUsuario from "./components/CadastroUsuario";
import ListaUsuarios from "./components/ListaUsuarios";

const MainFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

class App extends React.Component {
  state = {
    exibicao: "cadastro",
  };

  telaExibida = () => {
    switch (this.state.exibicao) {
      case "cadastro":
        return <CadastroUsuario />;
      case "lista":
        return <ListaUsuarios />;
      default:
        return <h1>Oops! We'll be right back!</h1>;
    }
  };

  onClickTrocar = () => {
    if (this.state.exibicao === "cadastro") {
      this.setState({ exibicao: "lista" });
    } else {
      this.setState({ exibicao: "cadastro" });
    }
  };

  render() {
    return (
      <MainFrame>
        <div>{this.telaExibida()}</div>

        <br/>

        <button onClick={this.onClickTrocar}>Trocar de tela</button>
      </MainFrame>
    );
  }
}

export default App;
