import '../styles/notfound.css'

function NotFound() {
    return (
        <div classname = "kasa-error">
            <div className="kasa-error-404">404</div>
            <span className="kasa-error-text">Chez vous, partout et ailleurs</span>
            <a classname="kasa-error-home" href="../pages/Home/index.jsx">Retourner sur la page d'acceuil</a>
        </div>
    );
}

export default NotFound