import React from 'react';
import './App.css';
import logo from './assets/simbolo_newbyte.png';

function App() {
  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} alt="Logo Newbyte" className="logo" />
        <h1>Ponto Newbyte</h1>
      </div>
    </div>
  );
}

export default App;
