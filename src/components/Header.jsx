import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Header() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        console.log("Token in localStorage:", token);
        setIsLoggedIn(!!token);
    }, []);


    // Listen for changes in localStorage from other tabs
    useEffect(() => {
        const syncLoginState = () => {
            const token = localStorage.getItem("token");
            setIsLoggedIn(!!token);
        };

        window.addEventListener("storage", syncLoginState);
        return () => window.removeEventListener("storage", syncLoginState);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false); // Update UI
        navigate("/login");
    };

    return (
        <header>
            <nav className="top-nav">
                <div className="nav-wrapper">
                    <ul className="nav-links">
                        <li><Link to="/about">Over ons</Link></li>
                        <li><Link to="/info">Info</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/">Spellen</Link></li>
                        <li><Link to="/make-card">Spel toevoegen</Link></li>

                    </ul>
                    <div className="auth-actions">
                        {isLoggedIn ? (
                            <>
                                <div className="profile-menu">
                                    <div className="logout-dropdown">
                                        <Link to="/profile" className="menu-button">Profile</Link>
                                        <button className="menu-button" onClick={handleLogout}>Logout</button>
                                    </div>
                                </div>
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