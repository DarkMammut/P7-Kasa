import React from 'react';
import logo from '../assets/logo-footer.png';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="kasa-footer">
      <img src={logo} className="kasa-footer-logo" alt="kasa-logo" />
      <span className="kasa-footer-copyright">
        &copy; 2020 Kassa. All rights reserved
      </span>
    </footer>
  );
}

export default Footer;
