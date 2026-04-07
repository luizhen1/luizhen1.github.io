import React, { useState } from 'react';
import Modal from 'react-modal';
import './pacotes.css';
import BoraBora from './borabora.jpg';
import EmeraldBay from './emeraldbay.jpg';
import Maldives from './maldives.jpg';
import Grenada from './grenada.jpg';
import Barbados from './barbados.jpg';
import KeyWest from './keywest.jpg';
import { db } from '../../firebaseConfig';
import { collection, addDoc } from "firebase/firestore";

Modal.setAppElement('#root');

const pacotesList = [ // mudei o nome para não conflitar com o componente
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
  const [nomeCompleto, setNomeCompleto] = useState(''); // Movi para dentro do componente
  const [email, setEmail] = useState('');             // Movi para dentro do componente
  const [telefone, setTelefone] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const openModal = (pacote) => {
    const estaLogado = localStorage.getItem('usuarioLogado');

    if (estaLogado === 'true') {
      setSelectedPackage(pacote);
      setIsModalOpen(true);
      setMessage('');
    } else {
      alert('Você precisa estar logado para reservar um pacote!');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
    setCheckInDate('');
    setCheckOutDate('');
    setNomeCompleto('');
    setEmail('');
    setTelefone('');
    setMessage('');
    setIsError(false);
  };

  // ADICIONADO O ASYNC AQUI ABAIXO
  const handleConfirm = async (e) => {
    e.preventDefault();

    const today = new Date();
    const checkOut = new Date(checkOutDate);

    if (checkOut >= today) {
      try {
        // Agora o await vai funcionar
        await addDoc(collection(db, "reservas"), {
          cliente: nomeCompleto,
          email: email,
          telefone: telefone,
          pacote: selectedPackage.nome,
          dataEntrada: checkInDate,
          dataSaida: checkOutDate,
          dataSolicitacao: new Date()
        });

        setMessage('Reserva efetuada e salva no banco de dados!');
        setIsError(false);
      } catch (error) {
        console.error("Erro ao salvar no Firebase:", error);
        setMessage('Erro ao conectar com o banco de dados.');
        setIsError(true);
      }
    } else {
      setMessage('Erro: A data de saída deve ser igual ou maior que a data de hoje.');
      setIsError(true);
    }
  };

  return (
    <div className="pacotes-container">
      <h1 className="pacotes-title">Pacotes de Viagem</h1>
      <div className="pacotes-grid">
        {pacotesList.map((pacote, index) => (
          <div key={index} className="pacote-card">
            <img src={pacote.imagem} alt={pacote.nome} className="pacote-imagem" />
            <h2>{pacote.nome}</h2>
            <p>{pacote.descricao}</p>
            <span>{pacote.preco}</span>
            <button onClick={() => openModal(pacote)} className="reservar-btn">Reservar Pacote</button>
          </div>
        ))}
      </div>

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
                <input
                  type="text"
                  value={nomeCompleto}
                  onChange={(e) => setNomeCompleto(e.target.value)}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                Telefone:
                <input
                  type="tel"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  required
                />
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
