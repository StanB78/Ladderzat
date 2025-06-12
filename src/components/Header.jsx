import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/login');
    };

    const isLoggedIn = !!localStorage.getItem("token");

    return (
        <>
            <header>
                <nav className="top-nav">
                    <div className="nav-wrapper">
                        <ul className="nav-links">
                            <li><Link to="/about">Over ons</Link></li>
                            <li><Link to="/info">Info</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/make-card">Make Card</Link></li>
                        </ul>
                        <div className="login-prompt">
                            {isLoggedIn ? (
                                <button onClick={handleLogout}>Logout</button>
                            ) : (
                                <Link to="/login">Login</Link>
                            )}
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
