import React, { useState } from 'react';
import Modal from 'react-modal';
import './pacotes.css';
import BoraBora from './borabora.jpg';
import EmeraldBay from './emeraldbay.jpg';
import Maldives from './maldives.jpg';
import Grenada from './grenada.jpg';
import Barbados from './barbados.jpg';
import KeyWest from './keywest.jpg';


Modal.setAppElement('#root');

const pacotes = [
  { nome: 'Bora Bora', imagem: BoraBora, preco: 'R$10.000', descricao: 'Pacote incrível para Bora Bora.' },
  { nome: 'Emerald Bay', imagem: EmeraldBay, preco: 'R$8.500', descricao: 'Descubra Emerald Bay.' },
  { nome: 'Maldives', imagem: Maldives, preco: 'R$12.000', descricao: 'Visite as paradisíacas Maldives.' },
  { nome: 'Grenada', imagem: Grenada, preco: 'R$7.800', descricao: 'Aproveite Grenada com tudo incluído.' },
  { nome: 'Barbados', imagem: Barbados, preco: 'R$9.000', descricao: 'Explore as belezas de Barbados.' },
  { nome: 'Key West', imagem: KeyWest, preco: 'R$6.500', descricao: 'Aventura em Key West.' },
];

const Pacotes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false); // Novo estado para controlar se é erro

  const openModal = (pacote) => {
    setSelectedPackage(pacote);
    setIsModalOpen(true);
    setMessage(''); // Reset message on modal open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
    setCheckInDate('');
    setCheckOutDate('');
    setMessage('');
    setIsError(false); // Reset error state
  };

  const handleConfirm = (e) => {
    e.preventDefault();

    const today = new Date();
    const checkOut = new Date(checkOutDate);

    if (checkOut >= today) {
      setMessage('Reserva efetuada com sucesso!');
      setIsError(false); // Não é erro, portanto definimos como falso
    } else {
      setMessage('Erro: A data de saída deve ser igual ou maior que a data de hoje.');
      setIsError(true); // Definimos que é erro
    }
  };

  return (
    <div className="pacotes-container">
      <h1 className="pacotes-title">Pacotes de Viagem</h1>
      <div className="pacotes-grid">
        {pacotes.map((pacote, index) => (
          <div key={index} className="pacote-card">
            <img src={pacote.imagem} alt={pacote.nome} className="pacote-imagem" />
            <h2>{pacote.nome}</h2>
            <p>{pacote.descricao}</p>
            <span>{pacote.preco}</span>
            <button onClick={() => openModal(pacote)} className="reservar-btn">Reservar Pacote</button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPackage && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="modal-overlay"
        >
          <div className="modal-header">
            <h2>Reservar {selectedPackage.nome}</h2>
            <button onClick={closeModal} className="close-modal-btn">X</button>
          </div>
          <div className="modal-body">
            <p>Preencha suas informações para reservar o pacote para {selectedPackage.nome}.</p>
            <form className="reservation-form" onSubmit={handleConfirm}>
              <label>
                Nome Completo:
                <input type="text" required />
              </label>
              <label>
                Email:
                <input type="email" required />
              </label>
              <label>
                Telefone:
                <input type="tel" required />
              </label>
              <label>
                Data de Entrada:
                <input 
                  type="date" 
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)} 
                  required 
                />
              </label>
              <label>
                Data de Saída:
                <input 
                  type="date" 
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)} 
                  required 
                />
              </label>
              <button type="submit" className="confirm-btn">Confirmar</button>
            </form>
            {message && <p className={`message ${isError ? 'error' : 'success'}`}>{message}</p>}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Pacotes;
