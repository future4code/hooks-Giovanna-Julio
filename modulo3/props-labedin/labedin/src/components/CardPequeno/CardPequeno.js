import React from 'react'
import styled from 'styled-components'

const Box = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 100px;
`
const Logo = styled.img `
    width:30%;
    height: 30%;
`


function CardPequeno(props){
    return (
        <Box>
            <div>
                <Logo src={props.imagem}/>
            </div>

            <div>
                <p><strong>{props.campo}</strong></p>
            </div>

            <div>
                <p>{props.info}</p>
            </div>
        </Box>
    )

}

export default CardPequeno;