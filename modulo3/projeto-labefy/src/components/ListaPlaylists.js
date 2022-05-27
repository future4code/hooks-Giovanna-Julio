import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ReactAudioPlayer from 'react-audio-player';

const Item = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const SubTituloDois = styled.h4`
    color: #f4b354;
`
const NomePlaylist = styled.p`
    color: #acbbc3;
`
const MusicBox = styled.div`
    color: #f4b354;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const AdicionarBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

class ListaPlaylists extends React.Component {

    state = {
        lista: [],
        musicas: [],
        playlistId: "",
        showAdd: false,
        track: "",
        artista: "",
        link: "",
    }

    componentDidMount() {
        this.pegarLista()
    }

    componentDidUpdate(){
        this.pegarLista()
    }

    pegarLista = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"

        const headers = {
            headers: {
                Authorization: "giovanna-julio-hooks"
            }
        }

        axios.get(url, headers)
            .then((response) => {
                this.setState({lista: response.data.result.list})
            })
            .catch((error) => {
                alert("A lista de playlists não pôde ser carregada :(")
            })

    }

    onClickDeletar = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`

        const headers = {
            headers: {
                Authorization: "giovanna-julio-hooks"
            }
        }

        axios.delete(url, headers)
            .then((response) => {
                alert("Playlist deletada com sucesso!")
            })
            .catch((error) => {
                alert("Oops! Tente novamente :(")
            })
    }

    pegarMusicas = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks
        `
        const headers = {
            headers: {
                Authorization: "giovanna-julio-hooks"
            }
        }

        axios.get(url, headers)
            .then((response) => {
                this.setState({musicas: response.data.result.tracks})
            })
            .catch((error) => {
                alert("Erro :(")
            })
        
        
    }

    onClickAdicionarMusica = (id) => {
        this.setState({playlistId: id})
        this.setState({showAdd: true})
    }

    onChangeTrack = (event) => {
        this.setState({track: event.target.value})
    }

    onChangeArtista = (event) => {
        this.setState({artista: event.target.value})
    }

    onChangeLink = (event) => {
        this.setState({link: event.target.value})
    }
    
    adicionarMusicas = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.track,
            artist: this.state.artista,
            url: this.state.link
        }
        const headers = {
            headers: {
                Authorization: "giovanna-julio-hooks"
            }
        }

        axios.post(url, body, headers)
            .then((response) => {
                alert("Música adicionada!")
                this.setState({track:""})
                this.setState({artista:""})
                this.setState({link:""})
                this.setState({showAdd: false})
            })
            .catch((error) => {
                alert("Falha ao adicionar :(")
                console.log(error.response)
            })
    }

    onClickCancela = () => {
        this.setState({showAdd: false})
    }

    renderizaAdd = () => {
        if (this.state.showAdd === true) {
            return (<AdicionarBox>
                <input value={this.state.track} placeholder="Música" onChange={this.onChangeTrack}/>
                <input value={this.state.artista} placeholder="Artista" onChange={this.onChangeArtista}/>
                <input value={this.state.link} placeholder="URL" onChange={this.onChangeLink}/>
                <button onClick={() => this.adicionarMusicas(this.state.playlistId)}>Adicionar</button>
                <button onClick={this.onClickCancela}>Cancelar</button>
            </AdicionarBox>)
        }
    }
    
    render(){

        const listaNomes = this.state.lista.map((playlist) => {
            return <Item key={playlist.id}>
                <NomePlaylist>{playlist.name}</NomePlaylist>

                <div>
                    <button onClick={() => this.pegarMusicas(playlist.id)}>Detalhes</button>
                    <button onClick={() => this.onClickAdicionarMusica(playlist.id)}>Adicionar músicas</button>
                    <button onClick={() => this.onClickDeletar(playlist.id)}>Deletar</button>
                </div>
            </Item>
        })

        const musicas = this.state.musicas.map((tracks) => {
            return <MusicBox key={tracks.id}>
                <p>{tracks.artist} - {tracks.name}</p>
                <ReactAudioPlayer
                    src={tracks.url}
                    controls={true}
                />               
            </MusicBox>
        })


        return(
            <>
                <SubTituloDois>Conheça as playlists criadas por outros usuários!</SubTituloDois>
                {listaNomes}
                <hr/>
                {this.renderizaAdd()}
                <hr/>
                {musicas}
                
            </>
        )
    }
}

export default ListaPlaylists;