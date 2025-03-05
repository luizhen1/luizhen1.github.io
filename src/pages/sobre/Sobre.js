import React from 'react';
import './Sobre.css'; // Importe o arquivo CSS
import opa from './opa.png';


const Sobre = () => {
  return (
    <div className="container"> {/* Adicione a classe container */}
    <div>
    <a href="/">
        <img src={opa} alt="Destino Certo" />
    </a>
    </div>
      <h1>Sobre Nós</h1>
      <p>Bem-vindo ao Destino Certo! Somos apaixonados por viagens e queremos 
        compartilhar essa paixão com você. Navegue por uma variedade de destinos 
        inspiradores, de clássicos a lugares menos conhecidos. Nosso objetivo é tornar
        sua próxima viagem inesquecível, fornecendo dicas práticas e sugestões úteis. 
        Junte-se a nós nesta jornada de descoberta e aventura - o mundo espera por você!</p>
    </div>
  );
}

export default Sobre;
