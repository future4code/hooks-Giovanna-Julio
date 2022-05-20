import React from "react";
import styled from "styled-components";
import axios from "axios";
import CadastroUsuario from "./components/CadastroUsuario";
import ListaUsuarios from "./components/ListaUsuarios";

class App extends React.Component {
    render(){
        return(
            <>
             <CadastroUsuario/>
            </>
        )
    }
}

export default App;
