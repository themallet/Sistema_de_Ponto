import React from 'react';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
    return (
    <div style={styles.container}>
        <Sidebar />

        <div style={styles.content}>
        <div style={styles.header}>
            <h1>Dashboard</h1>
            <span>{new Date().toLocaleTimeString()}</span>
        </div>

        {/* Feedback */}
        <div style={styles.feedback}>
            <FeedbackCard title="Pontualidade" value="65%" desc="-25% Em Comparação com Fevereiro" color="#00a86b" />
            <FeedbackCard title="Atrasos" value="35%" desc="+35% Em Comparação com Fevereiro" color="#f44336" />
            <FeedbackCard title="Tempo de Intervalos" value="40 Min 55 Sec" desc="-13% Em Comparação com Fevereiro" color="#ff9800" />
            <FeedbackCard title="Tempo Trabalhando" value="40 Min 55 Sec" desc="+33% Em Comparação com Fevereiro" color="#2196f3" />
        </div>

        {/* Ponto Eletrônico */}
        <div style={styles.pontoEletronico}>
            <div style={styles.timeInfo}>
            <h3>Horas Trabalhadas</h3>
            <p>0 Hr 00 Mins 00 Secs</p>

            <h3>Horas de Intervalo</h3>
            <p>00 Hr 00 Mins 55 Secs</p>
            </div>

            <div style={styles.clock}>
            <div style={styles.clockFace}></div>
            <h2>{new Date().toLocaleTimeString()}</h2>
            </div>
        </div>

        <button style={styles.iniciarBtn}>Iniciar Trabalho</button>

        <footer style={styles.footer}>
            Copyright © 2025 NewByte
        </footer>
        </div>
    </div>
    );
}

function FeedbackCard({ title, value, desc, color }) {
    return (
    <div style={{ ...styles.card, borderColor: color }}>
        <h4>{title}</h4>
        <h2>{value}</h2>
        <p style={{ color }}>{desc}</p>
        </div>
    );
}

const styles = {
    container: { display: 'flex', height: '100vh', backgroundColor: '#f5f6fa' },
    content: { flex: 1, padding: '20px' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
    feedback: { display: 'flex', justifyContent: 'space-between', marginBottom: '20px' },
    card: { flex: 1, background: '#fff', border: '2px solid', borderRadius: '8px', padding: '20px', marginRight: '10px' },
    pontoEletronico: { display: 'flex', justifyContent: 'space-between', background: '#fff', borderRadius: '8px', padding: '20px', marginBottom: '20px' },
    timeInfo: { flex: 1 },
    clock: { flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
    clockFace: { width: '150px', height: '150px', borderRadius: '50%', background: '#2196f3', marginBottom: '10px' },
    iniciarBtn: { width: '100%', padding: '15px', background: 'linear-gradient(to right, #4CAF50, #8BC34A)', color: '#fff', fontSize: '16px', borderRadius: '5px', border: 'none', cursor: 'pointer' },
    footer: { textAlign: 'center', marginTop: 'auto', padding: '10px', fontSize: '14px' },
};
