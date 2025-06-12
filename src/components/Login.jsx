// components/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Simpele fake login (later kun je dit vervangen met echte API)
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('token', '123fakeToken'); // zet token
            navigate('/make-card'); // navigeer na inloggen
        } else {
            alert('Ongeldige gegevens');
        }
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Gebruikersnaam"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Wachtwoord"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Inloggen</button>
            </form>
        </div>
    );
}

export default Login;
