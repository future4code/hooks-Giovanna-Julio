import React from "react";
import styled from "styled-components";
import axios from "axios";

const DisplayUsuarios = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  border: 1px solid grey;
  justify-content: center;
  align-items: center;
  color: orange;
  padding-top: 10px;
`;

class ListaUsuarios extends React.Component {
  state = {
    listaUsuarios: [],
  };

  showLista = () => {
    const urlUsuarios =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

    const headers = {
      headers: {
        Authorization: "giovanna-julio-hooks",
      },
    };

    axios
      .get(urlUsuarios, headers)
      .then((response) => {
        this.setState({ listaUsuarios: response.data });
      })
      .catch((error) => {
        alert("Erro inesperado!");
      });
  };

  componentDidMount() {
    this.showLista();
  }

  deletaUsuario = (id) => {
    const urlUsuarioIndividual = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

    const headers = {
      headers: {
        Authorization: "giovanna-julio-hooks",
      },
    };

    axios
      .delete(urlUsuarioIndividual, headers)
      .then((response) => {
        alert("Usuário deletado com sucesso!");
      })
      .catch((error) => {
        alert("Tente novamente :(");
      });
  };

  render() {
    const usuarios = this.state.listaUsuarios.map((usuario) => {
      return (
        <div key={usuario.id}>
          <p>{usuario.name}</p>
          
          <button onClick={() => this.deletaUsuario(usuario.id)}>Deletar</button>
        </div>
      );
    });

    return (
      <DisplayUsuarios>
        <h2>Labenusers já cadastrados:</h2>
        {usuarios}
      </DisplayUsuarios>
    );
  }
}

export default ListaUsuarios;
