import React from 'react'
import '../styles/notfound.css'

function NotFound() {
    return (
        <div className = "kasa-error">
            <div className="kasa-error-404">404</div>
            <span className="kasa-error-text">Chez vous, partout et ailleurs</span>
            <a className="kasa-error-home" href="../pages/Home/index.jsx">Retourner sur la page d'acceuil</a>
        </div>
    );
}

export default NotFound