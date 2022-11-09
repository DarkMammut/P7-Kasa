import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo-header.png";
import "../styles/header.css";

const LINKS = [
  { name: "Acceuil", path: "/" },
  { name: "About", path: "/About" },
];

function Header() {
  let location = useLocation();

  return (
    <header className="kasa-header">
      <Link to="/">
        <img src={logo} className="kasa-header-logo" alt="kasa-logo" />
      </Link>
      <nav className="kasa-header-nav">
        <ul>
          {LINKS.map((link) => (
            <li>
              <Link
                to={link.path}
                style={{
                  textDecoration:
                    link.path === location.pathname ? "underline" : "none",
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
