// src/App.jsx
import React from 'react';
import './App.css';
import LoginLeft from './components/LoginLeft';  // Import LoginLeft
import LoginRight from './components/LoginRight';  // Import LoginRight

function App() {
  return (
    <div className="login-container">
      <LoginLeft />  {/* Left side with image */}
      <LoginRight />  {/* Right side with form */}
    </div>
  );
}

export default App;