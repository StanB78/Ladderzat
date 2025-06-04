import'../index.css';

function Header() {
    return (
        <>
            <div className="main"></div>
            <header>
                <nav className="top-nav">
                    <div className="nav-wrapper">
                        <ul className="nav-links">
                            <li><a href="aboutus.html">Over ons</a></li>
                            <li><a href="#">Info</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                        <div className="login-prompt">
                            <a href="login.php">Login</a>
                        </div>
                    </div>
                </nav>
            </header>
            
            <h1>Ladderzat</h1>

            <main className="card-container"></main>
            
            <footer className="site-footer">
                <div className="footer-content">
                    <p>&copy; 2025 Ladderzat. Alle rechten voorbehouden.</p>
                    <ul className="footer-links">
                        <li><a href="#about">Over ons</a></li>
                        <li><a href="#info">Info</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </footer>
        </>
    );
}

export default Header;

