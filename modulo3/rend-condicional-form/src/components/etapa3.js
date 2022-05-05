import React from 'react'
import styled from 'styled-components'

const Mid = styled.div`
    text-align: center;
`

class Etapa3 extends React.Component {
  
  render() {

    return (
      <Mid>
        <h2><strong>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</strong></h2>

        <label for="email">7. Por que você não terminou um curso de graduação?</label>
        <br/>
        <input type="text" id="email"/>
        <br/>

        <label for="extra">8. Você fez algum curso complementar?</label>
        <br/>
        <select name="extra" id="extra">
            <option value="nao">Não</option>
            <option value="tech">Técnico</option>
            <option value="ingles">Inglês</option>
        </select>
        <br/>
        <br/>

      </Mid>
    );
  }
}
export default Etapa3;