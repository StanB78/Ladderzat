import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import MakeCard from "./components/MakeCard";
import Login from "./components/Login"; // ✅ echte login
import Profile from "./components/Profile";

const Home = () => <h2>Homepagina</h2>;

const PrivateRoute = ({ children }) => {
    const isLoggedIn = !!localStorage.getItem("token");
    return isLoggedIn ? children : <Login />;
};

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile/>}/>
                <Route
                    path="/make-card"
                    element={
                        <PrivateRoute>
                            <MakeCard />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
