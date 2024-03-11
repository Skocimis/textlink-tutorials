import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function VerificationForm() {
    const location = useLocation();
    const [code, setCode] = useState("");
    const { email, phoneNumber, password } = location.state || {};

    const navigate = useNavigate();

    const onSignUpClick = async () => {
        try {
            const result = await fetch("http://localhost:2000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email, phoneNumber, password, code
                })
            });
            const data = await result.json();
            if (data.success) {
                navigate("/dashboard", { prop1: 2 });
            } else {
                console.log(data);
                alert("Error: Could not sign up");
            }
        } catch (e) {
            console.log("KURE")
            console.log(e);
            alert("Error: Could not sign up");
        }
    };

    return (
        <div style={styles.regform}>
            <h1 style={styles.header}>Verify phone number</h1>
            <p>Enter the verification code below</p>
            <input
                style={styles.textinput}
                placeholder="Verification code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <button
                style={styles.button}
                onClick={onSignUpClick}>
                Continue
            </button>
        </div>
    );
}

const styles = {
    regform: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column",
        height: '100vh',
        backgroundColor: '#36485f',
        paddingLeft: '60px',
        paddingRight: '60px',
    },
    header: {
        fontSize: '24px',
        color: '#fff',
        paddingBottom: '10px',
        marginBottom: '40px',
        borderBottom: '1px solid #199187',
    },
    textinput: {
        width: '20%',
        height: '40px',
        marginBottom: '30px',
        color: '#fff',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '1px solid #f8f8f8',
    },
    button: {
        display: 'inline-block',
        width: '20%',
        padding: '20px',
        backgroundColor: '#59cbbd',
        color: '#fff',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',
    }
};
