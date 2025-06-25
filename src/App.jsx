import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import MakeCard from "./components/MakeCard";
import Login from "./components/Login"; // ✅ echte login
import Profile from "./components/Profile";
import Home from "./components/Home"; // ✅ echte home
import About from "./components/About";
import Contact from "./components/Contact";


const PrivateRoute = ({ children }) => {
    const isLoggedIn = !!localStorage.getItem("token");
    return isLoggedIn ? children : <Login />;
};

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/make-card" element={<MakeCard />}/>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
