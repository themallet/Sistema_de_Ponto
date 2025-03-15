import React, { useState } from "react";
import logo from "../assets/simbolo_newbyte.png"; // Keep your logo import

const LoginRight = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    console.log("Logging in with:", { id, password });
    setError(""); // Clear errors if successful
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
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="eye-icon">👁️</span>
          </div>

          {error && <p className="error-message">{error}</p>}

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