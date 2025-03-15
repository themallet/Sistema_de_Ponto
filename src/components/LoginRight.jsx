import React, { useState } from 'react';
import logo from '../assets/simbolo_newbyte.png'; // Adjust path as necessary

const LoginRight = () => {
  // State for the form fields and error message
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); // Track password visibility

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    if (!id || !password) {
      setErrorMessage('Por favor, preencha todos os campos');
      return;
    }

    // Here you would add logic to check the credentials
    setErrorMessage('');
    console.log('ID:', id, 'Password:', password);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="login-right">
      <div className="login-box">
        <img src={logo} alt="Logo NewByte" className="logo" />
        <h2>Bem Vindo!</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ID Empresarial"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <div className="password-field">
            <input
              type={passwordVisible ? 'text' : 'password'} // Toggle between 'text' and 'password'
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {passwordVisible ? '🙈' : '👁️'} {/* Toggle eye icon */}
            </span>
          </div>

          <button type="submit">Entrar</button>
        </form>

        {/* Conditionally show the error message */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        <div className="help-text">
          Problemas no Login? <a href="#">Fale Conosco</a>
        </div>

        <footer>© NewByte - 2025</footer>
      </div>
    </div>
  );
};

export default LoginRight;