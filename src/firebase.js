

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Config
const firebaseConfig = {
    apiKey: "AIzaSyC6XxlLC1spY-VJjnyJsGnEXxnYKoxyY9A",
    authDomain: "social-roc-2e64f.firebaseapp.com",
    projectId: "social-roc-2e64f",
    storageBucket: "social-roc-2e64f.firebasestorage.app",
    messagingSenderId: "794657873353",
    appId: "1:794657873353:web:b4aff63055d64459a8dc18",
    measurementId: "G-MP9W3NX55X"
};

// Initialisatie
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();


export { db, auth, googleAuthProvider };
