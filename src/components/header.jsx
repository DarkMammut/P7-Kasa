import React from 'react'
import logo from '../assets/logo-header.png';
import '../styles/header.css'

function Header() {
    return (
        <header className="kasa-header">
            <img src={logo} className="kasa-header-logo" alt="kasa-logo" />
            <nav className="kasa-header-nav">
                <ul>
                    <li>
                        <a href="http://localhost:3000">Acceuil</a>
                    </li>
                    <li>
                        <a href="http://localhost:3000/About">A Propos</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header