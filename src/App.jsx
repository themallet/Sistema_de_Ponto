import React from 'react';
import './App.css';
import logo from './assets/simbolo_newbyte.png';
import bg from './assets/background.png';

function App() {
  return (
    <div className="login-container">
      {/* Lado esquerdo com imagem */}
      <div
        className="login-left"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {/* Lado direito com o formulário */}
      <div className="login-right">
        <div className="login-box">
          <img src={logo} alt="Logo NewByte" className="logo" />
          <h2>Bem Vindo!</h2>

          <form>
            <input type="text" placeholder="ID Empresarial" />
            <div className="password-field">
              <input type="password" placeholder="Senha" />
              <span className="eye-icon">👁️</span> {/* Pode trocar depois */}
            </div>

            <button type="submit">Entrar</button>
          </form>

          <div className="help-text">
            Problemas no Login? <a href="#">Fale Conosco</a>
          </div>

          <footer>© NewByte - 2025</footer>
        </div>
      </div>
    </div>
  );
}

export default App;