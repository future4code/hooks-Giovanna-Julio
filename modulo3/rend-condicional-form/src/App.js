import React from 'react';
import Etapa1 from './components/etapa1';
import Etapa2 from './components/etapa2';
import Etapa3 from './components/etapa3';
import Fim from './components/fim';
import styled from 'styled-components';

const Center = styled.div`
  text-align: center;
`
class App extends React.Component {
  
  state = {
    etapa: 1,
  }

  acionarEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
  }

  paginaRenderizada = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Fim /> 
      default:
        return <Etapa1 />
    }
  }

  render() {

    return (
      <Center>
        {this.paginaRenderizada()}
        {this.state.etapa !== 4 && (
          <button onClick={this.acionarEtapa}>Próxima etapa</button>
        )}
      </Center>
    );
  }
}
export default App;
