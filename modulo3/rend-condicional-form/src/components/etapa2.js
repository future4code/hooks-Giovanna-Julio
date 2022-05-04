import React from 'react'
import styled from 'styled-components'

const Middle = styled.div`
    text-align: center;
`

class Etapa2 extends React.Component {
  
  render() {

    return (
      <Middle>
        <h2><strong>ETAPA 2 - INFORMAÇÕES ENS. SUPERIOR</strong></h2>

        <label for="curso">5. Qual curso?</label>
        <br/>
        <input type="text" id="curso"/>
        <br/>
           
        <label for="unidade">6. Qual a unidade de ensino?</label>
        <br/>
        <input type="text" id="unidade"/>
        <br/>
        <br/>
            
      </Middle>
    );
  }
}
export default Etapa2;