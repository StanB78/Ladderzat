import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "../firebase.js"; // pas het pad aan naar jouw firebase.js

function Login() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        // Log user.
        console.log(result.user);

        navigate("/profile");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
      });
  };

  return (
    <>
    <div className="login-page">
            <h2>Login</h2>
            <form onSubmit={loginWithGoogle}>
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
    <div>
      <button onClick={loginWithGoogle}>Log in with Google</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
    </>
  );
}

export default Login;
