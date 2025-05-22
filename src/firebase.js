    // Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyC6XxlLC1spY-VJjnyJsGnEXxnYKoxyY9A",
    authDomain: "social-roc-2e64f.firebaseapp.com",
    projectId: "social-roc-2e64f",
    storageBucket: "social-roc-2e64f.firebasestorage.app",
    messagingSenderId: "794657873353",
    appId: "1:794657873353:web:b4aff63055d64459a8dc18",
    measurementId: "G-MP9W3NX55X"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);