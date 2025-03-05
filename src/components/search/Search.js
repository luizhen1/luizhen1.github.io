import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.css';

import Gold from '../../assets/gold.png';

function Search() {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [modalMessage, setModalMessage] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [isBooked, setIsBooked] = useState(false);

    const navigate = useNavigate(); // Hook para navegação

    const handleSubmit = (e) => {
        e.preventDefault();
        const today = new Date();
        const checkOutDate = new Date(checkOut);

        if (checkOutDate < today) {
            setModalMessage('Erro: A data de checkout não pode ser anterior à data atual.');
            setShowModal(true);
        } else {
            setModalMessage(`Tarifas disponíveis! A data de checkout ${checkOut} está disponível. Tarifa: R$30,00.`);
            setShowModal(true);
            setIsBooked(false);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setCheckIn('');
        setCheckOut('');
    };

    const handleBooking = () => {
        setModalMessage('Viagem agendada com sucesso!');
        setIsBooked(true);
    };

    const redirectToPackages = () => {
        navigate('/pacotes');
    };

    return (
        <div name='book' className='search'>
            <div className="container">
                <div className="left">
                    <h2>FÉRIAS DE LUXO INCLUÍDAS PARA DUAS PESSOAS</h2>
                    <p>Venha experimentar o auge das férias luxuosas com tudo incluído...</p>
                    <div className="search-col-2">
                        <div className="box">
                            <div>
                                <img src={Gold} alt="/" style={{ marginRight: '1rem' }} />
                            </div>
                            <div>
                                <h3>LIDERANÇA MUNDIAL</h3>
                                <p>EMPRESA TUDO INCLUÍDO POR 20 ANOS SEGUIDOS</p>
                            </div>
                        </div>
                        <div className="box">
                            <div>
                                <h3>NINGUÉM INCLUI MAIS</h3>
                                <p>EMPRESA TUDO INCLUÍDO POR 20 ANOS SEGUIDOS</p>
                                <button onClick={redirectToPackages}>Ver Pacotes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="promo">
                        <h4 className="save">GANHE 7% DE DESCONTO ADICIONAL</h4>
                        <p className="timer">FALTAM 12 HORAS!</p>
                        <p className="offers">VER TODAS AS OFERTAS ATUAIS</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrap">
                            <label>Destino</label>
                            <select>
                                <option value="1">Grande Antigua</option>
                                <option value="2">Grenda</option>
                                <option value="3">Emerald Bay</option>
                                <option value="4">Bora Bora</option>
                                <option value="5">Key West</option>
                                <option value="6">Maldives</option>
                                <option value="7">Barbados</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input 
                                    type="date" 
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input 
                                    type="date" 
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                />
                            </div>
                        </div>
                        <button type="submit">Tarifas e Disponibilidades</button>
                    </form>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p className="modal-message">{modalMessage}</p>
                        {!isBooked && (
                            <button className="modal-button" onClick={handleBooking}>Agendar</button>
                        )}
                        {isBooked && (
                            <p className="success-message">Viagem agendada com sucesso!</p>
                        )}
                        <button className="modal-button" onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Search;
