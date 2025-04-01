import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import logo from '../assets/simbolo_newbyte.png';
import userAvatar from '../assets/user-avatar.png';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedMonth, setSelectedMonth] = useState("Março");

  // Atualiza o relógio a cada segundo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Formata a hora em HH:MM AM/PM
  const formatTime = (date) => date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', hour12: true });

  // Dados das métricas
  const metrics = [
    { title: "Pontualidade", value: "65%", change: "-25%", type: "negative", color: "green" },
    { title: "Atrasos", value: "35%", change: "+35%", type: "positive", color: "red" },
    { title: "Tempo de Intervalos", time: "00h 40min 55s", change: "-13%", type: "negative", color: "orange" },
    { title: "Tempo Trabalhando", time: "00h 40min 55s", change: "+33%", type: "positive", color: "blue" },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
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
            <li className="active"><span>Dashboard</span></li>
            <li><span>Histórico</span></li>
            <li><span>Minha Conta</span></li>
          </ul>
        </nav>
        
        <div className="logout"><span>Sair</span></div>
      </aside>
      
      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
          <div className="time">{formatTime(currentTime)}</div>
        </header>
        
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
          
          {/* Métricas usando .map() */}
          <div className="metrics-grid">
            {metrics.map((metric, index) => (
              <div key={index} className="metric-card">
                <h3>{metric.title}</h3>
                <div className="metric-content">
                  <div className="metric-data">
                    {metric.value ? <div className="percentage">{metric.value}</div> : 
                    <div className="time-value">{metric.time}</div>}
                    <div className={`comparison ${metric.type}`}>
                      {metric.change} Em Comparação com Fevereiro
                    </div>
                  </div>
                  <div className={`chart ${metric.color}`}></div>
                </div>
              </div>
            ))}
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
          <div className="copyright">© 2025 NewByte</div>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
