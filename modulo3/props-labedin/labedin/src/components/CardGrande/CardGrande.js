import React from 'react';
import styled from 'styled-components'

const Container = styled.div `
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const Imagem = styled.img `
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`
const Titulo = styled.h4 `
    margin-bottom: 15px;
`
const Inside = styled.div `
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`

function CardGrande(props) {
    return (
        <Container>
            <Imagem src={ props.imagem } />
            <Inside>
                <Titulo>{ props.nome }</Titulo>
                <p>{ props.descricao }</p>
            </Inside>
        </Container>
    )
}

export default CardGrande;