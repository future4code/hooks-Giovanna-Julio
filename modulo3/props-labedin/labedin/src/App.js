import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Selfie from './img/selfie.jpg'
import Pacheco from './img/pacheco.jpg'
import Cwb from './img/cwb.jpg'
import CardPequeno from './components/CardPequeno/CardPequeno'
import EmailLogo from './img/email.png'
import Pin from './img/pin.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {Selfie} 
          nome="Giovanna Julio" 
          descricao="Oi, eu sou a Giovanna. Sou uma orgulhosa aluna Labenu. Estou gostando muito de aprender a programar, React tem sido desafiador mas muito divertido. Já passamos por JavaScript, HTML, CSS, e agora vamos conquistar mais o React!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={EmailLogo} 
          campo= "E-mail:" 
          info= "gigalhardo98@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={Pin} 
          campo= "Endereço:" 
          info= "Curitiba, Paraná - Brasil."
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem= {Cwb}
          nome="Aulas Particulares CWB" 
          descricao="Autônoma. Ensinando inglês para todas as idades!" 
        />
        
        <CardGrande 
          imagem={Pacheco} 
          nome="Paulo Pacheco Imóveis" 
          descricao="Assistênte comercial/Auxiliar administrativa." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
