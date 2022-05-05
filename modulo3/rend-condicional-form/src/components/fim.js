import React from 'react'
import styled from 'styled-components'

const MiddleMan = styled.div`
    text-align: center;
`

class Fim extends React.Component {
  
  render() {

    return (
      <MiddleMan>
        <h2><strong>O FORMULÁRIO ACABOU</strong></h2>

        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </MiddleMan>
    );
  }
}
export default Fim;