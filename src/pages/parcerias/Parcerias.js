import React from 'react';
import './Parcerias.css'; // Importe o arquivo CSS

const Parcerias = () => {
  // Aqui você pode definir uma lista de empresas parceiras
  const partners = [
    { name: 'GORILLA SUNSET', logo: '/empresa1.png' },
    { name: 'INGOUDE COMPANY', logo: '/empresa2.png' },
    { name: 'INGOUDE COMPANY', logo: '/empresa3.png' },
    { name: 'SALFORD & CO.', logo: '/empresa4.png' },
    // Adicione mais empresas conforme necessário
  ];

  return (
    <div className='empresas'>
      <div className='logo'>
        <a href="/">
          <img src="/opa.png" alt="Destino Certo" className="logo-img" />
        </a>
      </div>
      <h1>Empresas Parceiras</h1>
      <div className="partners-list">
        {partners.map((partner, index) => (
          <div key={index} className="partner-item">
            <img src={partner.logo} alt={partner.name} />
            <p>{partner.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Parcerias;
