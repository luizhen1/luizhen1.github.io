import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar o useNavigate
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate(); // Inicializar o hook useNavigate

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Verifica se o email e a senha são os valores definidos
    if (email === 'luizunifil@gmail.com' && password === '123') {
      setIsLoggedIn(true); // Exibe o modal de sucesso
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  const handleCloseModal = () => {
    setIsLoggedIn(false); // Fecha o modal
    navigate('/'); // Redireciona para a página inicial
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Senha</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-button">Entrar</button>
          </form>
        </div>
      </div>

      {/* Modal de sucesso */}
      {isLoggedIn && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Sucesso!</h2>
            <p>Usuário logado com sucesso!</p>
            <button onClick={handleCloseModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
