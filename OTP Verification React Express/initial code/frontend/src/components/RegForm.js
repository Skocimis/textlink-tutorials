import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegForm() {
    const [email, setEmail] = useState("my.email@gmail.com");
    const [phoneNumber, setPhoneNumber] = useState("+381690156360");
    const [password, setPassword] = useState("12345678");

    const navigate = useNavigate(); 

    const onSignUpClick = async () => {
        try {
            const result = await fetch("http://localhost:2000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email, phoneNumber, password
                })
            });
            const data = await result.json();
            if (data.success) {
                navigate("/dashboard");
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
            <h1 style={styles.header}>Registration</h1>
            <input
                style={styles.textinput}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                style={styles.textinput}
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
                style={styles.textinput}
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                style={styles.button}
                onClick={onSignUpClick}>
                Sign up
            </button>
        </div>
    );
}

const styles = {
    regform: {
        width: '100%',
    },
    header: {
        fontSize: '24px',
        color: '#fff',
        paddingBottom: '10px',
        marginBottom: '40px',
        borderBottom: '1px solid #199187',
    },
    textinput: {
        width: '100%',
        height: '40px',
        marginBottom: '30px',
        color: '#fff',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '1px solid #f8f8f8',
    },
    button: {
        display: 'inline-block',
        width: '100%',
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
