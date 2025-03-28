import React from 'react';
import { FaHome, FaHistory, FaUser } from 'react-icons/fa';

export default function Sidebar() {
    return (
    <div style={styles.sidebar}>
        <div style={styles.logo}>
        <img src="/simbolo_newbyte.png" alt="Logo" style={styles.logoImg} />
        <h2 style={styles.logoText}>NewByte</h2>
        </div>
    
        <div style={styles.profile}>
        <img src="https://via.placeholder.com/80" alt="Bruno Lopes" style={styles.avatar} />
        <h3>Bruno Lopes</h3>
        </div>

        <div style={styles.menu}>
        <button style={styles.menuButton}><FaHome /> Dashboard</button>
        <button style={styles.menuButton}><FaHistory /> Histórico</button>
        <button style={styles.menuButton}><FaUser /> Minha Conta</button>
        </div>

        <div style={styles.logout}>
        <button style={styles.logoutButton}>Sair</button>
        </div>
    </div>
    );
}

const styles = {
    sidebar: { width: '250px', backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh', padding: '20px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' },
    logo: { display: 'flex', alignItems: 'center' },
    logoImg: { width: '40px', marginRight: '10px' },
    logoText: { fontSize: '1.2rem', fontWeight: 'bold' },
    profile: { textAlign: 'center', marginTop: '30px' },
    avatar: { width: '80px', height: '80px', borderRadius: '50%', marginBottom: '10px' },
    menu: { marginTop: '20px', display: 'flex', flexDirection: 'column' },
    menuButton: { display: 'flex', alignItems: 'center', padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', marginBottom: '10px', cursor: 'pointer' },
    logout: { marginTop: 'auto' },
    logoutButton: { background: '#f44336', color: '#fff', border: 'none', padding: '10px', borderRadius: '5px', cursor: 'pointer' },
};
