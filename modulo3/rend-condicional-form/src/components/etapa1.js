import React from 'react'
import styled from 'styled-components'

const Central = styled.div`
    text-align: center;
`

class Etapa1 extends React.Component {
  
  render() {

    return (
      <Central>
        <h2><strong>ETAPA 1 - DADOS PESSOAIS</strong></h2>

        <label for="nome">1. Qual o seu nome?</label>
        <br/>
        <input type="text" id="nome"/>
        <br/>   

        <label for="idade">2. Qual sua idade?</label>
        <br/>
        <input type="text" id="idade"/>
        <br/>
           
        <label for="email">3. Qual seu email?</label>
        <br/>
        <input type="text" id="email"/>
        <br/>
            
        <label for="ensino">4. Qual é seu grau de escolaridade?</label>
        <br/>
        <select name="ensino" id="ensino">
            <option value="med-inc">Médio incompleto</option>
            <option value="med-com">Médio completo</option>
            <option value="sup-inc">Superior incompleto</option>
            <option value="sup-com">Superior completo</option>
        </select>
        <br/>
        <br/>
            
      </Central>
    );
  }
}
export default Etapa1;