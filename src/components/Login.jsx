import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";
import { db, auth, googleAuthProvider } from "../firebase";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginWithEmail = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("E-mail", "==", email.trim()));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError("Gebruiker niet gevonden");
        return;
      }

      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();

      if (userData.Password === password) {
        console.log("Inloggen gelukt:", userData);
        navigate("/profile");
      } else {
        setError("Wachtwoord incorrect");
      }
    } catch (err) {
      console.error(err);
      setError("Er is iets misgegaan");
    }
  };

  const loginWithGoogle = () => {
    setError("");
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        // Google login gelukt
        navigate("/profile");
      })
      .catch((error) => {
        console.error(error);
        setError("Fout bij Google inloggen");
      });
  };

  return (
    <div className="login-page">
      <h2>Login</h2>

      <form onSubmit={loginWithEmail}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

      <hr />

      <button onClick={loginWithGoogle}>Log in met Google</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
