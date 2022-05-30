import React from 'react'
import styled from 'styled-components'
import CriarPlaylist from './components/CriarPlaylist';
import ListaPlaylists from './components/ListaPlaylists';
import GlobalStyle from './globalStyles';
import Logo from "./img/logo.png"

const Titulo = styled.h1`
  color: #f97c0d;
  font-size: 50px;
`
const Divisor = styled.h2`
  color: #acbbc3;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Logotipo = styled.img`
  height: 50px;
  width: 50px;
`

class App extends React.Component {
  
  render(){
    return(
      <>
        <GlobalStyle/>

        <Header>
          <Logotipo src={Logo}/>
          <Titulo>Labefy</Titulo>
        </Header>

        <CriarPlaylist/>

        <Divisor>Ou...</Divisor>

        <ListaPlaylists/>
      </>
    )
  }
}

export default App;
