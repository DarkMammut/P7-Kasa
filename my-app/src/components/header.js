import logo from '../assets/logo.svg';
import '../styles/Header.css'

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="kasa-logo" />
            <nav className="App-nav">
                <ul>
                    <li>
                        <a>Acceuil</a>
                    </li>
                    <li>
                        <a>A Propos</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header