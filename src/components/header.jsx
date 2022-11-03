import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-header.png';
import '../styles/header.css';

function Header() {
  return (
    <header className="kasa-header">
      <Link to="/">
        <img src={logo} className="kasa-header-logo" alt="kasa-logo" />
      </Link>
      <nav className="kasa-header-nav">
        <ul>
          <li>
            <Link to="/">Acceuil</Link>
          </li>
          <li>
            <Link to="/About">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
