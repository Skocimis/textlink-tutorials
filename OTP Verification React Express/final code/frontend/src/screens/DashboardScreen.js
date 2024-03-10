import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardScreen() {
    const navigate = useNavigate();

    return (
        <div style={styles.container}>
            <div style={styles.dashboard}>
                <h1 style={styles.header}>Dashboard</h1>
                <h2 style={styles.subheader}>Welcome, you are signed in. </h2>
                <button
                    style={styles.button}
                    onClick={() => navigate("/register")}>
                    Sign out
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#36485f',
        paddingLeft: '60px',
        paddingRight: '60px',
    },
    dashboard: {
        width: '100%',
    },
    header: {
        fontSize: '24px',
        color: '#fff',
        paddingBottom: '10px',
        marginBottom: '40px',
        borderBottom: '1px solid #199187',
    },
    subheader: {
        fontSize: '20px',
        color: '#fff',
        marginBottom: '25px',
    },
    button: {
        display: 'inline-block',
        padding: '20px',
        backgroundColor: '#59cbbd',
        color: '#fff',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        textDecoration: 'none',
        margin: '0 auto',
        marginTop: '20px',
        textAlign: 'center',
    },
};
