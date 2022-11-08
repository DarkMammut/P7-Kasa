import React  from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo-header.png";
import "../styles/header.css";

let path = window.location.pathname

function renderSwitch(page) {
  switch (path) {
    case "/":  // Home page path
      switch (page) {
        case "/About":
          return <Link to={page} style={{ textDecoration: "none" }}>A Propos</Link>;

        case "/":
          return (
            <Link to={page} style={{ textDecoration: "underline" }}>
              Acceuil
            </Link>
          );

        default:
          return <Link to={page} style={{ textDecoration: "none" }}>{page}</Link>;
      }

    case "/About": // About page path
      switch (page) {
        case "/About":
          return (
            <Link to={page} style={{ textDecoration: "underline" }}>
              A Propos
            </Link>
          );

        case "/":
          return <Link to={page} style={{ textDecoration: "none" }}>Acceuil</Link>;

        default:
          return <Link to={page} style={{ textDecoration: "none" }}>{page}</Link>;
      }

    default: // Default page path
      switch (page) {
        case "/About":
          return <Link to={page} style={{ textDecoration: "none" }}>A Propos</Link>;

        case "/":
          return <Link to={page} style={{ textDecoration: "none" }}>Acceuil</Link>;

        default:
          return <Link to={page} style={{ textDecoration: "none" }}>{page}</Link>;
      }
  }
}

function Header() {
  return (
    <header className="kasa-header">
      <Link to="/">
        <img src={logo} className="kasa-header-logo" alt="kasa-logo" />
      </Link>
      <nav className="kasa-header-nav">
        <ul>
          <li>{renderSwitch("/")}</li>
          <li>{renderSwitch("/About")}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
