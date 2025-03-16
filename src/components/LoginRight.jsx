import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import logo from '../assets/simbolo_newbyte.png'; // Adjust path as necessary

const LoginRight = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [loading, setLoading] = useState(false); // Loading state
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    username: false,
    password: false
  });
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({
      username: false,
      password: false
    });

    // Check for empty fields
    let formValid = true;
    let newErrors = {};

    if (!formData.username) {
      formValid = false;
      newErrors.username = true;
    }
    if (!formData.password) {
      formValid = false;
      newErrors.password = true;
    }

    setErrors(newErrors);

    // If the form is valid, simulate loading
    if (formValid) {
      setLoading(true);
      
      // Simulate a backend call
      setTimeout(() => {
        setLoading(false);
        
        // Redirect user to dashboard after successful login
        navigate('/dashboard');
      }, 2000); // Adjust the time as needed
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle the visibility
  };

  return (
    <div className="login-right">
      <div className="login-box">
        <img src={logo} alt="Logo NewByte" className="logo" />
        <h2>Bem Vindo!</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="ID Empresarial"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={errors.username ? 'error' : ''}
            />
            {errors.username && <span className="error-message">Este campo é obrigatório</span>}
          </div>

          <div className="password-field">
            <div className="input-wrapper">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Senha"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={errors.password ? 'error' : ''}
              />
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                {passwordVisible ? '🙈' : '👁️'}
              </span>
            </div>
            {errors.password && <span className="error-message">Este campo é obrigatório</span>}
          </div>

          <button type="submit" disabled={loading}>
            {loading ? (
              <div className="spinner"></div>
            ) : (
              'Entrar'
            )}
          </button>
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