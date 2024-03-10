import React from 'react';
import RegForm from '../components/RegForm'; // Assuming the path is correct

export default function RegisterScreen() {
    return (
        <div style={styles.container}>
            <RegForm></RegForm>
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
    }
};
