// src/components/LoginLeft.jsx
import React from 'react';
import bg from '../assets/background.png'; // Adjust path as necessary

const LoginLeft = () => {
  return (
    <div
      className="login-left"
      style={{ backgroundImage: `url(${bg})` }}
    ></div>
  );
};

export default LoginLeft;