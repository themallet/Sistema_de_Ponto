import React, { useState } from 'react';
import logo from '../assets/simbolo_newbyte.png';

const LoginRight = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="login-right">
      <div className="login-box">
        <img src={logo} alt="Logo NewByte" className="logo" />
        <h2>Bem Vindo!</h2>

        <form>
          <input type="text" placeholder="ID Empresarial" />

          <div className="password-field">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
            />
            <span className="eye-icon" onClick={togglePassword}>
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <button type="submit">Entrar</button>
        </form>

        <div className="help-text">
          Problemas no Login? <a href="#">Fale Conosco</a>
        </div>

        <footer>© NewByte - 2025</footer>
      </div>
    </div>
  );
};

export default LoginRight;