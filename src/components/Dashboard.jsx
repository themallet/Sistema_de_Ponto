import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // We'll create this file for styling
import logo from '../assets/simbolo_newbyte.png'; // Adjust path as needed
import userAvatar from '../assets/user-avatar.png'; // Adjust path or use a placeholder

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedMonth, setSelectedMonth] = useState("Março");

  // Update the clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Format the time as HH:MM AM/PM
  const formatTime = (date) => {
    return date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="NewByte Logo" />
          <span>NewByte</span>
        </div>
        
        <div className="user-profile">
          <img src={userAvatar} alt="User Avatar" />
          <h3>Bruno Lopes</h3>
        </div>
        
        <nav className="navigation">
          <ul>
            <li className="active">
              <i className="icon-dashboard"></i>
              <span>Dashboard</span>
            </li>
            <li>
              <i className="icon-history"></i>
              <span>Histórico</span>
            </li>
            <li>
              <i className="icon-account"></i>
              <span>Minha Conta</span>
            </li>
          </ul>
        </nav>
        
        <div className="logout">
          <i className="icon-logout"></i>
          <span>Sair</span>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <div className="header">
          <h1>Dashboard</h1>
          <div className="time">{formatTime(currentTime)}</div>
        </div>
        
        {/* FeedBack Section */}
        <section className="feedback-section">
          <h2>FeedBack</h2>
          
          <div className="filters">
            <div className="filter-select">
              <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
              </select>
              <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                <option value="Março">Março</option>
                <option value="Fevereiro">Fevereiro</option>
                <option value="Janeiro">Janeiro</option>
              </select>
            </div>
          </div>
          
          <div className="metrics-grid">
            {/* Pontualidade */}
            <div className="metric-card">
              <h3>Pontualidade</h3>
              <div className="metric-content">
                <div className="metric-data">
                  <span className="month">Março</span>
                  <div className="percentage">65%</div>
                  <div className="comparison negative">-25% Em Comparação com Fevereiro</div>
                </div>
                <div className="chart green"></div>
              </div>
            </div>
            
            {/* Atrasos */}
            <div className="metric-card">
              <h3>Atrasos</h3>
              <div className="metric-content">
                <div className="metric-data">
                  <span className="month">Março</span>
                  <div className="percentage">35%</div>
                  <div className="comparison positive">+35% Em Comparação com Fevereiro</div>
                </div>
                <div className="chart red"></div>
              </div>
            </div>
            
            {/* Tempo de Intervalos */}
            <div className="metric-card">
              <h3>Tempo de Intervalos / Março</h3>
              <div className="metric-content">
                <div className="metric-data">
                  <div className="time-value">00 Hours</div>
                  <div className="time-value">40 Minutes</div>
                  <div className="time-value">55 Seconds</div>
                  <div className="comparison negative">-13% Em Comparação com Fevereiro</div>
                </div>
                <div className="chart orange"></div>
              </div>
            </div>
            
            {/* Tempo Trabalhando */}
            <div className="metric-card">
              <h3>Tempo Trabalhando / Março</h3>
              <div className="metric-content">
                <div className="metric-data">
                  <div className="time-value">00 Hours</div>
                  <div className="time-value">40 Minutes</div>
                  <div className="time-value">55 Seconds</div>
                  <div className="comparison positive">+33% Em Comparação com Fevereiro</div>
                </div>
                <div className="chart blue"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Ponto Eletrônico Section */}
        <section className="ponto-section">
          <h2>Ponto Eletrônico</h2>
          
          <div className="ponto-container">
            <div className="ponto-grid">
              <div className="ponto-card">
                <h3>Horas Trabalhadas</h3>
                <div className="time-display">0 Hr 00 Mins 00 Secs</div>
              </div>
              
              <div className="ponto-card clock-card">
                <div className="clock">
                  <div className="clock-face"></div>
                  <div className="time-display">{formatTime(currentTime)}</div>
                </div>
              </div>
              
              <div className="ponto-card">
                <h3>Horas de Intervalo</h3>
                <div className="time-display">00 Hr 00 Mins 55 Secs</div>
              </div>
            </div>
            
            <button className="start-button">Iniciar Trabalho</button>
          </div>
        </section>
        
        <footer className="footer">
          <div className="copyright">Copyright © 2025 NewByte</div>
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;