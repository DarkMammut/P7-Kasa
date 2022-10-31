import React from 'react'
import logo from '../assets/logo-header.png';
import '../styles/header.css'

function Header() {

    return (
        <header className="kasa-header">
            <a href="/">
                <img src={logo} className="kasa-header-logo" alt="kasa-logo"/>
            </a>
            <nav className="kasa-header-nav">
                <ul>
                    <li>
                        <a href="/">Acceuil</a>
                    </li>
                    <li>
                        <a href="/About">A Propos</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header