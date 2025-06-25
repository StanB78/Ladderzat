import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase.js";


function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleFormLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const userCredential = await signInWithEmailAndPassword(auth, username, password);
            const token = await userCredential.user.getIdToken();
            localStorage.setItem("token", token);
            window.dispatchEvent(new Event("storage"));
            navigate("/profile");
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }
    };


    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            const token = await result.user.getIdToken();
            localStorage.setItem("token", token);
            window.dispatchEvent(new Event("storage"));
            navigate("/profile");
        } catch (error) {
            setError(error.message);
            console.error(error.message);
        }
    };


    return (
        <>
            <div className="login-page">
                <h2>Login</h2>
                <form onSubmit={handleFormLogin}>
                    <input
                        type="email"
                        placeholder="Email..."
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
            <div>
                <button onClick={loginWithGoogle}>Log in with Google</button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </>
    );
}

export default Login;
