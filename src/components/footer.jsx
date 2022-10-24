import logo from '../assets/logo-footer.png';
import '../styles/footer.css'

function Footer() {
    return (
        <footer className="kasa-footer">
            <img src={logo} className="kasa-footer-logo" alt="kasa-logo"/>
            <div classname="kasa-footer-copyright">©️ 2020 Kassa. All rights reserved</div>
        </footer>
    );
}

export default Footer