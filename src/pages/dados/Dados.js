import React from 'react'
import './Dados.css'; // Importação do arquivo de estilos CSS
import opa from './opa.png';


const Dados = () => {
  return (
    <div className='infos'>
    <a href="/">
     <img src={opa}  />
     </a>
      <h2>Contato</h2>
      <p>(43)99999-9999 <br></br>sememail@unifil.com.br</p>

      <h2>Termos</h2>
      <p>Bem-vindo aos Termos de Serviço do Destino Certo <br></br>Download.</p>

      <h2>Política de Privacidade</h2>
      <p>Bem-vindo a Política de Privacidade do Destino Certo <br></br>Download.</p>

      <h2>Preços</h2>
      <p>Whatsapp <br></br> Clique aqui!</p>

      <h2>SAC</h2>
      <p>Bem-vindo ao SAC do Destino Certo <br></br>Clique aqui!.</p>
    </div>
  )
}

export default Dados