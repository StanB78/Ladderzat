import { Link, useNavigate } from "react-router-dom";
import { Routes, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import MakeCard from "./MakeCard";

function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/login');
    };

    const isLoggedIn = !!localStorage.getItem("token");

    return (
        <header>
            <nav className="top-nav">
                <div className="nav-wrapper">
                    <ul className="nav-links">
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/about"}>About</Link></li>
                        <li><Link to={"/contact"}>Contact</Link></li>
                        <li><Link to={"/make-card"}>Maak een kaart</Link></li>
                    </ul>
                    <div className="auth-actions">
                        {isLoggedIn ? (
                            <>
                                <Link to="/profile" className="auth-button">Profile</Link>
                                <button onClick={handleLogout} className="auth-button">Logout</button>
                            </>
                        ) : (
                            <Link to="/login" className="auth-button">Login</Link>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;