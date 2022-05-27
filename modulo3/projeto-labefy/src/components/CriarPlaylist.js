import React from 'react'
import styled from 'styled-components'
import axios from 'axios'


const ContainerCriar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Subtitulo = styled.h4`
    color: #f4b354;
`


class CriarPlaylist extends React.Component {
  
  state = {
    nomePlaylist: ''
  }

  onChangeNome = (event) => {
    this.setState({nomePlaylist: event.target.value})
  }

  onClickCriar = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

    const headers = {
        headers: {
            Authorization: "giovanna-julio-hooks"
        }
    }

    const body = {
        name: this.state.nomePlaylist
    }

    axios.post(url, body, headers)
        .then((response) => {
            alert("Playlist criada com sucesso!")
            this.setState({nomePlaylist: ""})
        })
        .catch((error) => {
            alert("Um erro inesperado ocorreu :(")
        })
  }
    
  render(){
    return(
      <ContainerCriar>
        <Subtitulo>Crie uma playlist:</Subtitulo>
        <input 
            value={this.state.nomePlaylist} 
            placeholder="Insira o nome da playlist" 
            onChange={this.onChangeNome}
        />

        <button onClick={this.onClickCriar}>Criar</button>
      </ContainerCriar>
    )
  }
}

export default CriarPlaylist;